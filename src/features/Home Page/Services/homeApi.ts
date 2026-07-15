import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const axiosCallHome = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach the access token to every request
axiosCallHome.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const getHomeData = (latitude: number, longitude: number) => {
  return axiosCallHome.get("/home", {
    params: {
      latitude,
      longitude,
    },
  });
};

export const searchData = (query: string) => {
  return axiosCallHome.get("/search", {
    params: {
      q: query,
    },
  });
};