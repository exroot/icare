import { useSWRInfinite } from "swr";
import axios from "./client";
import { ENDPOINTS } from "../utils/api";
import { useEffect } from "react";

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

const useComments = ({ postId, initialData = null }) => {
  const {
    data,
    error: errorComments,
    mutate: mutateComments,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(
    (index) => `${ENDPOINTS.comments}?postId=${postId}`,
    fetcher,
    {
      refreshInterval: 1 * 1000,
      initialData,
    }
  );
  const results = data ? [].concat(...data) : [];
  const comments = [].concat(...results);
  const isLoadingInitialData = !data && !errorComments;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = !!errorComments || data?.[0]?.length === 0;
  const isRefreshing = isValidating && data && data.length === size;

  return {
    comments,
    isLoadingMore,
    isRefreshing,
    isValidating,
    isEmpty,
    size,
    errorComments,
    setSize,
    mutateComments,
  };
};

export default useComments;
