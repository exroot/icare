import useSWR from 'swr'
import axiosClient from '../client'

const useTrafficSourcesFetcher = async (path) => {
  try {
    const { data } = await axiosClient({
      url: path,
      method: 'GET',
      headers: {},
    })
    return data
  } catch (err) {
  }
}

const useTrafficSources = () => {
  const { data, error } = useSWR(`/traffic/profile-page-views`, useTrafficSourcesFetcher, {
    refreshInterval: 0,
  })

  const loading = !data && !error

  return {
    data,
    loading,
    error,
  }
}
export default useTrafficSources
