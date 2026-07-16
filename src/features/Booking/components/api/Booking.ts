import {axiosInstance }from "@/services/axiosInstance";
export const getBooking= async () => {
  const { data } = await axiosInstance.get("/bookings");
  return data;
};