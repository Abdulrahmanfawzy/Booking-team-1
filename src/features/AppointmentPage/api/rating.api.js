import { axiosInstance } from "@/services/axiosInstance";

export const ratingApi = {
  addRating: async ({ booking_id, doctor_id, rating, comment }) => {
    const response = await axiosInstance.post("/ratings", {
      booking_id,
      doctor_id,
      rating,
      comment,
    });

    return response.data;
  },
};