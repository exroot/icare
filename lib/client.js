import axios from 'axios'

const clientInstance = async ({
  url = '/',
  body = {},
  method = 'GET',
  headers,
  contentType,
} = {}) => {
  const token = localStorage.getItem('access')
  const clientToken = token
  // console.log({ clientToken, url })
  const clientInstance = axios.create({
    headers: headers || {
      Accept: 'application/json',
      'Content-Type': contentType || 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  })

  try {
    clientInstance.interceptors.response.use(
      async (response) => response,
      async (errorClient) => {
        console.error({ errorClient })
        // Return any error which is not due to authentication normally
        if (errorClient.response.status !== 401) {
          return Promise.reject(errorClient)
        }
        /* 
                    status 401 on refresh_token endpoint => Logout user because refresh token didn't work
                    Also, redirect to login page 
                */
        if (
          errorClient.config.url === '/auth/token/refresh/' ||
          errorClient.config.url === '/auth/login/'
        ) {
          return Promise.reject(errorClient)
        }
        // Try request again but with a new access token
        // wait for a new access token
        const refresh = { refresh: localStorage.getItem('refresh') }
        const { data: token } = await axios.post(
          '/auth/token/refresh/',
          refresh,
          {
            /* Enable cookies to send the refresh token */
            // withCredentials: true,
            baseURL: process.env.NEXT_PUBLIC_API_URL,
          }
        )
        localStorage.setItem('access', token.access)
        // New request with new token
        const { config } = errorClient
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          'access'
        )}`
        const response = await axios.request(config)
        return Promise.resolve(response)
      }
    )
    const response = await clientInstance.request({
      url,
      method,
      data: body,
    })
    return response
  } catch (err) {
    throw err
  }
}

export default clientInstance
