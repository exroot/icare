import useSWR from 'swr'
import axiosClient from '../client'
import { tomorrowsDate, amonthAgoDate } from '../../utils/dates'

const useProfileViewsFetcher = async (path) => {
  try {
    const { data } = await axiosClient({
      url: path,
      method: 'POST',
      headers: {},
      body: {
        start_date: amonthAgoDate,
        end_date: tomorrowsDate,
      },
    })
    return data
  } catch (err) {
    console.error(err)
  }
}

const useProfileViews = () => {
  const { data, error } = useSWR(
    `/traffic/profile-page-views-stats`,
    useProfileViewsFetcher,
    {
      refreshInterval: 0,
    }
  )

  const loading = !data && !error

  return {
    data,
    loading,
    error,
  }
}
export default useProfileViews;
