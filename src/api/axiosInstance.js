
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Set by AuthContext at startup. The interceptor calls this on a 401
// instead of navigating itself — routing stays in exactly one place.
let onUnauthorized = () => {};
export const registerUnauthorizedHandler = (handler) => {
  onUnauthorized = handler;
};

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      onUnauthorized();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;