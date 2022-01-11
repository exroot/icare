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

const useCategories = () => {
  const {
    data,
    error: errorCategories,
    mutate: mutateCategories,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(
    (index) => `${ENDPOINTS.categories}?page=${index + 1}&limit=20&show_meta=1`,
    fetcher,
    {
      refreshInterval: 1 * 1000,
    }
  );

  const results = data ? [].concat(...data) : [];
  const categories = [].concat(...results);
  const isLoadingInitialData = !data && !errorCategories;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = !!errorCategories || data?.[0]?.length === 0;
  const isRefreshing = isValidating && data && data.length === size;

  return {
    categories,
    isLoadingMore,
    isRefreshing,
    isValidating,
    isEmpty,
    size,
    errorCategories,
    setSize,
    mutateCategories,
  };
};

export default useCategories;
