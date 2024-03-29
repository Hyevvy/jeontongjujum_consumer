import axios from "axios";
import authAPI from "./authentication/authenticationAPIService";
const baseURL = `${process.env.NEXT_PUBLIC_API_END_POINT}`;

const authAxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    Accept: "application/json",
    Authorization:
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null,
  },
});

const unAuthAxiosInstance = axios.create({
  baseURL,
});

authAxiosInstance.interceptors.request.use((config: any) => {
  if (config.headers) {
    if (typeof window !== "undefined") {
      config.headers.Authorization = window.localStorage.getItem("accessToken");
    }
    return config;
  }
});

authAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 418) {
      const data = await authAxiosInstance.put(
        `/authentication-service/api/access-token`,
        { refreshToken: localStorage.getItem("refreshToken") }
      );
      if (data.data.code === 200) {
        localStorage.setItem("accessToken", data?.data.data.accessToken);
        localStorage.setItem("refreshToken", data?.data.data.refreshToken);
      }
      originalRequest.config.headers.Authorization =
        data?.data.data.accessToken;
      originalRequest._retry = true;
      return authAxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

function getCookieForRefresh() {
  function escape(s) {
    return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, "\\$1");
  }
  var match = document.cookie.match(
    RegExp("(?:^|;\\s*)" + escape("refreshToken") + "=([^;]*)")
  );
  return match ? match[1] : null;
}

export { authAxiosInstance, unAuthAxiosInstance, getCookieForRefresh };
