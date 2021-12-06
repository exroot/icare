import { useSWRInfinite } from 'swr'
import axios from './client'

const fetcher = async (path) => {
  try {
    const { data } = await axios({
      url: path,
      method: 'GET',
    })
    return data
  } catch (err) {
    console.error({ err })
    throw err
  }
}

const useNotificationsHistory = () => {
  const {
    data,
    error: errorNotifications,
    mutate: mutateNotifications,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(
    (index) => `/notifications/?page=${index + 1}&show_meta=1`,
    fetcher,
    {
      refreshInterval: 90 * 1000,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
      refreshWhenHidden: false,
      revalidateOnFocus: false,
      refreshWhenOffline: false,
    }
  )
  const results = data ? [].concat(...data) : []
  const notifications = [].concat(...results)
  const isLoadingInitialData = !data && !errorNotifications
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = !!errorNotifications || data?.[0]?.length === 0
  const isRefreshing = isValidating && data && data.length === size

  return {
    notifications,
    isLoadingMore,
    isRefreshing,
    isValidating,
    isEmpty,
    size,
    errorNotifications,
    setSize,
    mutateNotifications,
  }
}

export default useNotificationsHistory
