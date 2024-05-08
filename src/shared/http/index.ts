import axios from "axios";
import type { HttpClient, createHttpClientProps } from "./model";

const headers = {
  "Content-Type": "application/json",
};

export function createHttpClient({ PrefixUrl }: createHttpClientProps): HttpClient {
  return {
    post: (endpoint, payload, option) => {
      return axios({
        method: "post",
        baseURL: option?.directPrefixUrl || PrefixUrl,
        url: endpoint,
        data: payload,
      });
    },
    get: (endpoint, option) => {
      return axios({
        method: "get",
        baseURL: option?.directPrefixUrl || PrefixUrl,
        url: endpoint,
      });
    },
  };
}
