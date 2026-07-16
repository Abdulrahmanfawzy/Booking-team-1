import { axiosInstance } from "@/services/axiosInstance";

export const appointmentApi = {
  getDoctor: async (doctorUserId) => {
    const response = await axiosInstance.get(
      `/doctor/${doctorUserId}`
    );

    return response.data;
  },
};