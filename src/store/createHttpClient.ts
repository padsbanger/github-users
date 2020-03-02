import axios from "axios";

const API_URL = "https://api.github.com/";

export function createHttpClient(headers?: Object) {
  const http = axios.create({
    baseURL: API_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    }
  });

  return http;
}
