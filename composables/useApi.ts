import { useFetch } from "#app";
type useFetchType = typeof useFetch;

export const useFetchAPI: useFetchType = (path, options = {}) => {
  const baseApiUrl = "https://ameer.azq1.com/fixxil/api/v1/website";
  options.baseURL = baseApiUrl;
  options.headers = {
    ...options.headers,
    Authorization: "Bearer " // + token
  }
  return useFetch(path, options);
}