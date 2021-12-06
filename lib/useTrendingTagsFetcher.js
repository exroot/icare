import useSWR from 'swr'
import axiosClient from './client'

const shoutoutsFetcher = async (path) => {
  try {
    const { data } = await axiosClient({
      url: path,
      method: 'GET',
      headers: {},
    })
    return data
  } catch (err) {
    console.error(err)
  }
}

const useTrendingTags = () => {
  const { data, error } = useSWR('/shoutouts/tags/popular', shoutoutsFetcher, {
    refreshInterval: 0,
  })

  const loading = !data && !error

  return {
    //   TODO enable after we get tags working in the backend
    data: [
      'music',
      'games',
      'ps5',
      'news',
      '2042',
      'podcast',
      'music',
      'tech',
      'hotel_pools',
      'DNB',
      'programming',
      'new',
      'running',
    ],
    // data,
    loading,
    error,
  }
}
export default useTrendingTags
