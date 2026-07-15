import { CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";
import { bookingApi } from "../api/booking.api";

export default function PaymentModal({
  isOpen,
  onClose,
  doctor,
  appointment,
  appointmentDate,
  appointmentTime,
  price,
}) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  function formatTime(time) {
    if (!time) return "";

    if (time.includes("AM") || time.includes("PM")) {
      return time;
    }

    const [hour, minute] = time.split(":");

    let h = Number(hour);
    const period = h >= 12 ? "PM" : "AM";

    h = h % 12;
    if (h === 0) h = 12;

    return `${h}:${minute} ${period}`;
  }

  async function handleBooking() {
    try {
      setLoading(true);

      const data = await bookingApi.createBooking({
        doctor_id: doctor.id,
        appointment_date: appointmentDate,
        appointment_time: formatTime(appointmentTime),
        consultation_type: "clinic",
      });

      console.log(data);

      onClose();
    } catch (error) {
      console.log(error.response?.data);
      console.log(error.response?.status);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Doctor */}
        <div className="flex items-center gap-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-20 w-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold">{doctor.name}</h2>

            <p className="text-gray-500">{doctor.specialty.name}</p>

            <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={16} />
              {doctor.address}
            </div>
          </div>
        </div>

        {/* Appointment */}
        <div className="mt-8 rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays size={18} className="text-main-blue" />
            <span>{appointment}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">
            Consultation Price
          </h3>

          <span className="text-2xl font-bold text-main-blue">
            EGP {price}
          </span>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-main-blue py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </div>
    </div>
  );
}