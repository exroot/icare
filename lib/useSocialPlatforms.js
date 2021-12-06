import useSWR from "swr";
import axios from "./client";

const fetcher = async (url) => {
  try {
    const { data } = await axios({
      url,
      method: "GET",
      headers: {},
    });
    return data.data;
  } catch (err) {
    console.error({ err });
    throw err;
  }
};

const useSocialPlatforms = () => {
  const {
    data: socialPlatforms,
    mutate: mutatePlatforms,
    error: errorPlatforms,
  } = useSWR("/socialmedia-platforms", fetcher, {
    refreshInterval: 0,
    dedupingInterval: 0,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    refreshWhenHidden: false,
    revalidateOnFocus: false,
    refreshWhenOffline: false,
  });
  const isLoadingPlatforms = !socialPlatforms && !errorPlatforms;

  return {
    socialPlatforms,
    mutatePlatforms,
    isLoadingPlatforms,
    errorPlatforms,
  };
};

export default useSocialPlatforms;
