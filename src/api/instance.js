import axios from "axios";
import { INVALID_TOKEN } from "../commom/messageConstant";
// import { checkRefreshToken } from "../components/utils/utils";
import { setAccessToken, setRefreshToken } from "../redux/slice/authSlice";
import { store } from "../redux/store";
import { refreshTokenAPI } from "./service/AuthService";

const API = axios.create();
API.interceptors.request.use(
  function (config) {
    // const refreshToken = store.getState().authReducer.refreshToken;
    // const checkbox = checkRefreshToken(refreshToken)
    // if (!checkbox) {
    //   window.location.href = '/GabiSpa';
    //   return Promise.reject('Chuyển hướng');
    // }
    const accessToken = store.getState().authReducer.accessToken;
    if (!accessToken) return config;
    config.headers['Authorization'] = 'Bearer ' + accessToken;

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
      if (!token) return
      API.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      return API(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const res = await refreshTokenAPI('auth/refresh-token');
    store.dispatch(setAccessToken(res.data.data.accessToken));
    store.dispatch(setRefreshToken(res.data.data.refreshToken));
    return res.data.data.accessToken;
  } catch (error) {
    console.error('Lỗi khi làm mới token:', error.message);
  }
}

export const refresh_token_API = axios.create();
refresh_token_API.interceptors.request.use(
  function (config) {
    const refreshToken = store.getState().authReducer.refreshToken;
    if (!refreshToken) return config;
    config.headers['Authorization'] = 'Bearer ' + refreshToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default API;

