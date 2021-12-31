export const reactQueryConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
};

export const QUERY_KEY_ADDRESSES = "QUERY_KEY_FLIGHTS";
export const QUERY_KEY_USER_DATA = "QUERY_KEY_USER_DATA";

export const API_ADDRESSES =
  "https://random-data-api.com/api/address/random_address?size=100";
export const API_USER_DATA =
  "https://random-data-api.com/api/users/random_user";
