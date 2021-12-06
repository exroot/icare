import axios from "axios";

const fetcher = async (url) => {
  const token = localStorage.getItem("access");
  const clientInstance = axios.create({
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  try {
    clientInstance.interceptors.response.use(
      // RESPONSE
      async (response) => {
        if (
          !localStorage.getItem("access") &&
          response.data.is_logged_in === false
        ) {
          return Promise.resolve(response);
        }
        if (
          localStorage.getItem("access") &&
          response.data.is_logged_in === true
        ) {
          return Promise.resolve(response);
        }
        // Try request again but with a new access token
        // wait for a new access token
        const refresh = { refresh: localStorage.getItem("refresh") };
        const { data: token } = await axios.post(
          "/auth/token/refresh/",
          refresh,
          {
            /* Enable cookies to send the refresh token */
            // withCredentials: true,
            baseURL: process.env.NEXT_PUBLIC_API_URL,
          }
        );
        localStorage.setItem("access", token.access);
        // New request with new token
        const {config} = response;
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "access"
        )}`;
        const newResponse = await axios.request({
          ...config,
          method: "GET",
        });
        return Promise.resolve(newResponse);
      },
      // ERROR
      async (error) => {
        // Return any error which is not due to authentication normally
        if (error.response?.status !== 401) {
          return Promise.reject(error);
        }
        /* 
          status 401 on refresh_token endpoint => Logout user because refresh token didn't work
          
          Also, redirect to login page 
      */

        if (error.config.url === "/auth/token/refresh/") {
          return Promise.resolve({
            is_logged_in: false,
          });
        }
        // Try request again but with a new access token
        // wait for a new access token
        const refresh = { refresh: localStorage.getItem("refresh") };
        const { data: token } = await axios.post(
          "/auth/token/refresh/",
          refresh,
          {
            /* Enable cookies to send the refresh token */
            // withCredentials: true,
            baseURL: process.env.NEXT_PUBLIC_API_URL,
          }
        );
        localStorage.setItem("access", token.access);
        // New request with new token
        const {config} = error;
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "access"
        )}`;
        const response = await axios.request({
          ...config,
          method: "GET",
        });
        return Promise.resolve(response);
      }
    );
    const { data } = await clientInstance.get(url);
    return data;
  } catch (err) {
    //   Refresh token has expired or something happened
    return Promise.resolve({
      is_logged_in: false,
    });

    // throw err;
  }
};

export default fetcher;
