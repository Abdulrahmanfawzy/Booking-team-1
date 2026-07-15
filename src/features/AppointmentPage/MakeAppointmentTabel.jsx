import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Day from "./components/Day";
import Hour from "./components/Hour";
import PaymentModal from "./components/PaymentModal";

export default function MakeAppointmentTabel({ doctor }) {
  const [activeDay, setActiveDay] = useState(null);
  const [activeHour, setActiveHour] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const daysMap = {
    sat: "Sat",
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
  };

  const freeDays = Object.keys(doctor.opening_hours || {}).map((key) => ({
    key,
    day: daysMap[key] || key,
  }));

  const freeHours =
    activeDay !== null
      ? doctor.opening_hours[freeDays[activeDay].key]
      : [];

  return (
    <>
      <div className="flex items-center gap-2">
        <ArrowLeft className="text-black cursor-pointer" />
        <p className="text-black">Make an appointment</p>
      </div>

      <div className="flex flex-col gap-5 mt-2 py-4 px-3 border-[1.5px] border-gray-border rounded-xl">
        <header className="pb-4 border-b-[1.5px] border-gray-border">
          <p className="text-gray">Choose day and time</p>
        </header>

        {/* Days */}
        <div className="flex justify-center gap-10 flex-wrap py-5">
          {freeDays.map((day, index) => (
            <Day
              key={day.key}
              day={day.day}
              isActive={activeDay === index}
              onClick={() => {
                setActiveDay(index);
                setActiveHour(null);
              }}
            />
          ))}
        </div>

        {/* Hours */}
        <div className="flex flex-wrap gap-4">
          {freeHours.map((hour, index) => (
            <Hour
              key={hour}
              hour={hour}
              isActive={activeHour === index}
              onClick={() => setActiveHour(index)}
            />
          ))}
        </div>

        {/* Selected appointment */}
        <div className="flex items-center py-3 justify-between">
          <div>
            {activeDay !== null && activeHour !== null && (
              <span>
                {`${freeDays[activeDay].day} - ${freeHours[activeHour]}`}
              </span>
            )}
          </div>

          <button
            className="px-10 py-3 border-[1.5px] border-main-blue rounded-sm bg-white text-main-blue font-medium transition-colors hover:bg-main-blue hover:text-white active:scale-95"
            onClick={() => setIsPaymentOpen(true)}
            disabled={activeDay === null || activeHour === null}
          >
            Book
          </button>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        doctor={doctor}
        appointment={
          activeDay !== null && activeHour !== null
            ? `${freeDays[activeDay].day} - ${freeHours[activeHour]}`
            : ""
        }
        price={doctor.consultation_price}
      />
    </>
  );
}