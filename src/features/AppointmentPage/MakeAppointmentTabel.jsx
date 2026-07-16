import { ArrowLeft, CalendarDays } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Hour from "./components/Hour";
import PaymentModal from "./components/PaymentModal";

export default function MakeAppointmentTabel({ doctor }) {
  const [activeHour, setActiveHour] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingError, setBookingError] = useState("");

  const availableSlots = doctor.available_slots || [];
  const openingHours = doctor.opening_hours || {};

  const hasAvailableDates = availableSlots.length > 0;

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-CA")
    : "";

  const dayMap = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const freeHours =
    selectedDate && openingHours[dayMap[selectedDate.getDay()]]
      ? availableSlots
      : [];

  const filterDate = (date) => {
    const dayKey = dayMap[date.getDay()];
    return Boolean(openingHours[dayKey]);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <ArrowLeft className="text-black cursor-pointer" />
        <p className="text-black">Make an appointment</p>
      </div>

      <div className="flex flex-col gap-5 mt-2 py-4 px-3 border-[1.5px] border-gray-border rounded-xl">
        <header className="flex justify-between items-center pb-4 border-b-[1.5px] border-gray-border">
          <p className="text-gray">Choose date and time</p>

          {hasAvailableDates ? (
            <div className="flex items-center gap-2">
              <CalendarDays className="text-main-blue" />

              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setActiveHour(null);
                  setBookingError("");
                }}
                filterDate={filterDate}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select date"
                className="border rounded px-2 py-1 outline-none"
              />
            </div>
          ) : (
            <p className="text-sm text-red-500 font-medium">
              No available appointments available.
            </p>
          )}
        </header>

        {hasAvailableDates && (
          <div className="flex flex-wrap gap-4">
            {freeHours.length > 0 ? (
              freeHours.map((hour, index) => (
                <Hour
                  key={hour}
                  hour={hour}
                  isActive={activeHour === index}
                  onClick={() => {
                    setActiveHour(index);
                    setBookingError("");
                  }}
                />
              ))
            ) : (
              selectedDate && (
                <p className="text-gray-500">
                  No available times for this date.
                </p>
              )
            )}
          </div>
        )}

        {hasAvailableDates && (
          <div className="flex items-center py-3 justify-between">
            <div>
              {selectedDate && activeHour !== null && (
                <span>
                  {formattedDate} - {freeHours[activeHour]}
                </span>
              )}
            </div>

            <button
              className="px-10 py-3 border-[1.5px] border-main-blue rounded-sm bg-white text-main-blue font-medium transition-colors hover:bg-main-blue hover:text-white active:scale-95"
              onClick={() => {
                if (!selectedDate) {
                  setBookingError("Please select a date.");
                  return;
                }

                if (activeHour === null) {
                  setBookingError("Please select a time.");
                  return;
                }

                setBookingError("");
                setIsPaymentOpen(true);
              }}
            >
              Book
            </button>
          </div>
        )}

        {bookingError && (
          <p className="text-sm text-red-500">{bookingError}</p>
        )}
      </div>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        doctor={doctor}
        appointment={
          selectedDate && activeHour !== null
            ? `${formattedDate} - ${freeHours[activeHour]}`
            : ""
        }
        appointmentDate={formattedDate}
        appointmentTime={activeHour !== null ? freeHours[activeHour] : ""}
        price={doctor.consultation_price}
      />
    </>
  );
}