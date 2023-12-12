import { QueryClient } from "@tanstack/react-query";

// getQueryClient
export const getQueryClient = (() => {
  let client = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            // option사항
            staleTime: Infinity,
            cacheTime: Infinity,
          },
        },
      });
    return client;
  };
})();

// QueryKeys
export const QueryKeys = {
  USER: "USERKEY",
  POST: "POSTKEY",
};
