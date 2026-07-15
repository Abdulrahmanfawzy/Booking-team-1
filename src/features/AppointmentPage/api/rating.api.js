import axios from "axios";

export const ratingApi = {
  addRating: async ({ booking_id, doctor_id, rating, comment }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/ratings`,
      {
        booking_id,
        doctor_id,
        rating,
        comment,
      },
      {
        headers: {
          Authorization: "Bearer 19|PZTIJjkE34C7EyC9PbhEOyx55Uf0zNKxQ6NQnqYt43a977c8",
        },
      }
    );

    return response.data;
  },
};