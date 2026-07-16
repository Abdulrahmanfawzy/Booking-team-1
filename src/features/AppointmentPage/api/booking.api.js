import { axiosInstance } from "@/services/axiosInstance";

export const bookingApi = {
  createBooking: async ({
    doctor_id,
    appointment_date,
    appointment_time,
    consultation_type,
  }) => {
    const response = await axiosInstance.post("/bookings", {
      doctor_id,
      appointment_date,
      appointment_time,
      consultation_type,
    });

    return response.data;
  },
};