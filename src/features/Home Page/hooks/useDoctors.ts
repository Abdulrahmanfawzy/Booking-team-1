import { useQuery } from "@tanstack/react-query";
import { getDoctors, type DoctorsParams } from "../Services/homeApi";

export const useDoctors = (params: DoctorsParams) => {
  return useQuery({
    queryKey: ["doctors", params],
    queryFn: async () => {
      const response = await getDoctors(params);
      return response.data;
    },
    enabled: !!params.latitude && !!params.longitude,
  });
};