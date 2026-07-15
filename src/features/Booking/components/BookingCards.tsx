import { CalendarRange, MapPin } from "lucide-react";
import { useBooking } from "./Hooks/UseBooking";

export default function BookingCards({ status}) {
    const { data, isLoading, isError } = useBooking();

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Something went wrong</h2>;

    const filteredBookings =
        status === "all"
            ? data?.data
            : data?.data?.filter((booking:any) => {
                  if (status === "upcoming") {
                      return booking.status.toLowerCase() === "pending";
                  }

                  return booking.status.toLowerCase() === status;
              });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4  m-auto lg:w-full">
            {filteredBookings?.map((booking:any) => (
                <div
                    key={booking.id}
                    className="border border-gray-400 rounded-lg p-2 space-y-3"
                >
                    <div className="flex items-center justify-between border-b pb-1.5">
                        <div className="flex items-center">
                            <CalendarRange />
                            <h2 className="ml-2">
                                {booking.appointment_date}
                            </h2>
                        </div>

                        <h2 className="text-blue-500 capitalize">
                            {booking.status}
                        </h2>
                    </div>

                    <div className="flex items-center mt-2">
                        <img
                            src={booking.doctor.image}
                            alt={booking.doctor.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="ml-2">
                            <h2>{booking.doctor.name}</h2>
                            <h2>{booking.doctor.specialty}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin />
                        <h2>{booking.doctor.address}</h2>
                    </div>

                    <div className="flex space-x-1.5">
                        <button className="border border-gray-700 w-1/2 rounded-lg py-2">
                            Cancel
                        </button>

                        <button className="w-1/2 bg-blue-800 text-white rounded-lg py-2">
                            Reschedule
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}