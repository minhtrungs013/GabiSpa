import axios from "axios";
import { ACCESS_TOKEN, INVALID_TOKEN, REFRESH_TOKEN } from "../commom/messageConstant";
import { refreshTokenAPI } from "./service/AuthService";

const API = axios.create();
API.interceptors.request.use(
  function (config) {
    let token = getToken();
    if (!token) return config;
    console.log(token);
    config.headers['Authorization'] = 'Bearer ' + token;

    return config;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.data.message === INVALID_TOKEN && !originalRequest._retry) {
      originalRequest._retry = true;
      const token = await refreshToken();
      API.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      return API(originalRequest);
    }
    return Promise.reject(error);
  }
);

export function getToken() {
  return localStorage.getItem('access_token');
}

const refreshToken = async () => {
  return await refreshTokenAPI('auth/refresh-token')
    .then((res) => {
      localStorage.setItem(ACCESS_TOKEN, res.data.data.accessToken);
      localStorage.setItem(REFRESH_TOKEN, res.data.data.refreshToken);
      return res.data.data.accessToken
    })
    .catch((error) => {
      console.error('Lỗi khi làm mới token:', error.message);
    });
}

export const refresh_token_API = axios.create();
refresh_token_API.interceptors.request.use(
  function (config) {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return config;
    config.headers['Authorization'] = 'Bearer ' + refreshToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default API;

