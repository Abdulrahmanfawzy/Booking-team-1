import { getBooking } from "@/features/Booking/components/api/Booking";
import { useQuery } from "@tanstack/react-query";
export const useBooking = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: getBooking,
  });
};