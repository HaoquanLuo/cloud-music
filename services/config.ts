const devBaseUrl = "http://123.207.32.32:9000/";
const prodBaseUrl = "http://123.207.32.32:9000/";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseUrl : prodBaseUrl;

export const TIMEOUT = 5000;

export const RESPONSE_TYPE_JSON = "json";

export const HEADERS = { a: "123" };
