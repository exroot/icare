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

const useShoutouts = (profile) => {
  const { data: shoutouts, error: shoutoutsError } = useSWR(
    `/shoutouts/user/${profile ? profile.username : null}`,
    shoutoutsFetcher,
    {
      refreshInterval: 0,
    }
  )

  const shoutoutsLoading = !shoutouts && !shoutoutsError

  return {
    shoutouts,
    shoutoutsLoading,
    shoutoutsError,
  }
}
export default useShoutouts
