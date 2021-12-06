import useSWR from 'swr'
import axiosClient from '../client'
import { tomorrowsDate, amonthAgoDate } from '../../utils/dates'

const useEarningsFetcher = async (path) => {
  try {
    const { data } = await axiosClient({
      url: path,
      method: 'POST',
      body: {
        start_date: amonthAgoDate,
        end_date: tomorrowsDate,
      },
      headers: {},
    })
    return data
  } catch (err) {
  }
}

const useEarnings = () => {
  const { data, error } = useSWR(`/tips/stats`, useEarningsFetcher, {
    refreshInterval: 0,
  })

  const loading = !data && !error

  return {
    data,
    loading,
    error,
  }
}
export default useEarnings
