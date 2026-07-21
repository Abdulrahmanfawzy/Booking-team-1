import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export type DoctorsParams = {
  keyword?: string;
  specialist_id?: number;
  latitude: number;
  longitude: number;
  rating?: number;
  price_from?: number;
  price_to?: number;
  available_today?: boolean;
  sort?: string;
  page?: number;
};

export const axiosCallHome = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach the access token to every request
axiosCallHome.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");

  console.log("Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getHomeData = (latitude: number, longitude: number) => {
  return axiosCallHome.get("/home", {
    params: {
      latitude,
      longitude,
    },
  });
};

import type { Doctor } from "../types/doctorTypes";

export interface DoctorsResponse {
  data: {
    doctors: Doctor[];
  };
}

export const searchData = (query: string) => {
  return axiosCallHome.get("/search", {
    params: {
      q: query,
    },
  });
};

export const getDoctors = (params: DoctorsParams) => {
  console.log("PARAMS:", params);

  const request = axiosCallHome.get("/doctors", {
    params,
  });

  request.then((res) => console.log(res.config.url));

  return request;
};