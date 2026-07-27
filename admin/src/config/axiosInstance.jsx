import axios from "axios";
import { API_URL } from "../shared/utils/env";

const axiosInstance = axios.create({
  baseURL: API_URL + "/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    const errMessage = error.response?.data?.message;
    const errSuccess = error.response?.data?.success;
    const errStatusCode = error.response?.status;

    if (errSuccess) return Promise.reject(error);

    const redirectToLoginPage = () => {
      if (
        window.location.pathname !== "/" &&
        window.location.pathname.startsWith("/home")
      ) {
        window.location.href = "/";
      }
    };

    if (errMessage === "Access token expired") {
      if (errStatusCode !== 401 || originalRequest._retry)
        return Promise.reject(error);
      originalRequest._retry = true;

      try {
        await axios.get(`${API_URL}/api/auth/refresh-token`, {
          withCredentials: true,
        });

        return axiosInstance(originalRequest);
      } catch (err) {
        redirectToLoginPage();
        return Promise.reject(err);
      }
    }

    if (errMessage === "refresh token expired") {
      redirectToLoginPage();
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
