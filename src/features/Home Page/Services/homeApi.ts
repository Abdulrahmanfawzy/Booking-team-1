import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const axiosCallHome = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getHomeData = (latitude, longitude) => {
  return axiosCallHome.get("/home", {
    params: {
      latitude,
      longitude,
    },
  });
};