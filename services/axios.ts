import axios from "axios";
import md5 from "md5";

import { BASE_URL, RESPONSE_TYPE_JSON, TIMEOUT } from "./config";
import { WEB_CONFIG } from "./global.config";

axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  responseType: RESPONSE_TYPE_JSON,
});

instance.interceptors.request.use(
  (config) => {
    // token 密钥的设置
    const whiteList = WEB_CONFIG.whiteList;
    const url = config.url;
    const token = localStorage.getItem("token") || "";
    if (whiteList.indexOf(token) !== -1 && token) {
      config.headers.token = token;
    }
    // 密钥 secretID + 特殊算法
    const _secret = md5(WEB_CONFIG.secretID + new Date().toString());
    config.headers.secret = _secret;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const status = response.data.code ?? 200;
    const message = response.data.message ?? "Unknown error.";
    if (status === 401) {
      // Router.push("/about");
      return Promise.reject(new Error(message));
    }
    if (status !== 200) {
      return Promise.reject(new Error(message));
    }
    return response.data;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "Request Failed.";
          break;

        case 401:
          error.message = "Permission Denied.";
          break;

        default:
          throw Error(`Uncaught Error: ${error}`);
      }
    }
    return Promise.reject(new Error(error.message));
  }
);

export default instance;
