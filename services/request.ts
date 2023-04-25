import { AxiosRequestConfig } from "axios";
import request from "./axios";

type Goable = {
  go: boolean;
  data?: Record<string, any>;
  type?: "then" | "catch";
  msg?: string;
};

type GoableFn = (
  result: Goable | Record<string, any>
) => Promise<Goable | Record<string, any>>;

const myRequest = (function myRequest() {
  const cacheMap = new Map<string, any>();
  let hasRequested: string[] = [];
  return async (config: AxiosRequestConfig) => {
    const { url } = config;
    if (!url) {
      return Promise.reject("No url exists.");
    }
    if (cacheMap.has(url)) {
      return Promise.resolve(cacheMap.get(url));
    } else {
      if (hasRequested.indexOf(url) !== -1) {
        return Promise.reject({
          msg: "Already in requesting.",
        });
      }
      hasRequested.push(url);
      const result = await request({
        ...config,
      });
      hasRequested = hasRequested.filter((item) => item !== url);
      cacheMap.set(url, result);
      return result;
    }
  };
})();

// cache -> check duplication -> final request -> final handle
const myRequest2 = (function myRequest2() {
  const cacheMap = new Map<string, any>();
  let hasRequested: string[] = [];
  return async (config: AxiosRequestConfig) => {
    const { url } = config;
    let promise = Promise.resolve<Record<string, any> | Goable>({ go: true });
    const checkCache: GoableFn = (result) => {
      if (!result.go) {
        return Promise.resolve(result);
      }
      if (!url) {
        return Promise.reject("No url exists.");
      }
      if (cacheMap.has(url)) {
        return Promise.resolve({ go: false, type: "then", data: cacheMap });
      } else {
        return Promise.resolve({ go: true, type: "then" });
      }
    };
    const checkDuplication: GoableFn = (result) => {
      if (!result.go) {
        return Promise.resolve(result);
      }
      if (!url) {
        return Promise.reject("No url exists.");
      }
      if (hasRequested.indexOf(url) !== -1) {
        return Promise.reject({
          go: false,
          type: "catch",
          msg: "Already in requesting.",
        });
      } else {
        hasRequested.push(url);
        return Promise.resolve({ go: false, type: "then" });
      }
    };
    const finalRequest: GoableFn = async (result) => {
      if (!result.go) {
        return Promise.resolve(result);
      }
      const responseData = request({
        ...config,
      });
      return Promise.resolve({ go: true, type: "then", data: responseData });
    };
    const finalHandle: GoableFn = (result) => {
      if (!result.go) {
        return Promise.resolve(result);
      }
      if (result.type === "catch") {
        return Promise.reject({ go: false, data: result.data });
      }
      if (!url) {
        return Promise.reject("No url exists.");
      }
      if (!result.data) {
        return Promise.reject("Final handle error: no data");
      }
      hasRequested = hasRequested.filter((item) => item !== url);
      cacheMap.set(url, result);
      return Promise.resolve(result.data);
    };
    let _modules: GoableFn[] = [
      checkCache,
      checkDuplication,
      finalRequest,
      finalHandle,
    ];
    while (_modules.length > 0) {
      const fn = _modules.shift();
      if (!fn) {
        break;
      }
      promise = promise.then(fn);
    }
    return promise;
  };
})();

export { myRequest as request };
