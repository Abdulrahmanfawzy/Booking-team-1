import axios from "axios";

export const bookingApi = {
  createBooking: async ({
    doctor_id,
    appointment_date,
    appointment_time,
    consultation_type,
  }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/bookings`,
      {
        doctor_id,
        appointment_date,
        appointment_time,
        consultation_type,
      },
      {
        headers: {
          Authorization: `Bearer 19|PZTIJjkE34C7EyC9PbhEOyx55Uf0zNKxQ6NQnqYt43a977c8`
        },
      }
    );

    return response.data;
  },
};