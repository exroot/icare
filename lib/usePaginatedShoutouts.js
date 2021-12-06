import { useSWRInfinite } from 'swr'
import axios from './client'

const PAGE_SIZE = 10

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

// const fetcher = async (path) => {
//   try {
//     const url = process.env.NEXT_PUBLIC_API_URL + path
//     console.log({ url })
//     const accessToken = localStorage.getItem('access')
//     const res = await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//     console.log('RES: ', res)
//     const json = await res.json()
//     console.log({ json })
//     return json
//   } catch (err) {
//     console.log({ err })
//     throw err
//   }
// }

const usePaginatedShoutouts = (url) => {
  const {
    data,
    error: errorShoutouts,
    mutate: mutateShoutouts,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(
    (index) => `${url}?page=${index + 1}&show_meta=1`,
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
  const shoutouts = [].concat(...results)
  const isLoadingInitialData = !data && !errorShoutouts
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = !!errorShoutouts || data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size

  return {
    shoutouts,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    isValidating,
    isEmpty,
    size,
    errorShoutouts,
    setSize,
    mutateShoutouts,
  }
}

export default usePaginatedShoutouts
