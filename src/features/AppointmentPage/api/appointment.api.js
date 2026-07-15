import axios from "axios";

export const appointmentApi = {
  getDoctor: async (doctorUserId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/doctor/${doctorUserId}`,
      {
        headers: {
          Authorization: "Bearer 19|PZTIJjkE34C7EyC9PbhEOyx55Uf0zNKxQ6NQnqYt43a977c8",
        },
      }
    );

    return response.data;
  },
};