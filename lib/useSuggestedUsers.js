import { useSWRInfinite } from "swr";
import axios from "./client";
import { ENDPOINTS } from "../utils/api";

const fetcher = async (path) => {
  try {
    const { data } = await axios({
      url: path,
      method: "GET",
    });
    return data;
  } catch (err) {
    console.error({ err });
    throw err;
  }
};

const useSuggestedUsers = () => {
  const {
    data,
    error: errorSuggested,
    mutate: mutateSuggested,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite((index) => `${ENDPOINTS.profiles}/suggested`, fetcher, {
    refreshInterval: 90 * 1000,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    refreshWhenHidden: false,
    revalidateOnFocus: false,
    refreshWhenOffline: false,
  });
  const results = data ? [].concat(...data) : [];
  const suggested = [].concat(...results);
  const isLoadingInitialData = !data && !errorSuggested;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = !!errorSuggested || data?.[0]?.length === 0;
  const isRefreshing = isValidating && data && data.length === size;

  return {
    suggested,
    isLoadingMore,
    isRefreshing,
    isValidating,
    isEmpty,
    size,
    errorSuggested,
    setSize,
    mutateSuggested,
  };
};

export default useSuggestedUsers;
