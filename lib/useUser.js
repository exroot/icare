import { useEffect } from "react";
import useSWR from "swr";
import redirectToRoute from "../utils/redirectTo";

const USER_ENDPOINT = "/auth/user/";

const useUser = ({
  redirectTo = false,
  redirectIfFound = false,
  oneCall = false,
  initialData = null,
} = {}) => {
  const onServer = typeof window === "undefined";
  const { data: user, mutate: mutateUser, error } = useSWR(USER_ENDPOINT, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    // revalidateOnMount:
    //     oneCall || (!onServer && !localStorage.getItem("access")), // [DONT DELETE] uncomment for dev testing if needed
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: oneCall ? 0 : 1 * 1000 * 60 * 5,
    dedupingInterval: 1 * 1000 * 60 * 5, // Relay call to USER_ENDPOINT
    initialData,
  });

  const isLoading = !user && !error;

  useEffect(() => {
    if (!redirectTo || !user) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.is_logged_in) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.is_logged_in)
    ) {
      redirectToRoute(redirectTo);
    }
  }, [user, error, redirectTo, redirectIfFound]);

  return {
    user,
    mutateUser,
    error,
    isLoading,
  };
};

export default useUser;
