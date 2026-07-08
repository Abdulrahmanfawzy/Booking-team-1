import { ArrowLeft, CalendarDays } from "lucide-react";
import { useRef, useState } from "react";
import Day from "./components/Day";
import Hour from "./components/Hour";
import PaymentModal from "./components/PaymentModal";

export default function MakeAppointmentTabel({doctor}) {
  const dateInput = useRef(null);

  const [activeDay, setActiveDay] = useState(null);
  const [activeHour, setActiveHour] = useState(null);

  // open and close payment modal
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)

  // The calender data
  const [selectedMonth, setSelectedMonth] = useState("");
  // To show the name of the month
  const monthName = selectedMonth
    ? new Date(`${selectedMonth}-01`).toLocaleString("en-US", {
      month: "long",
    })
    : "";

  const freeDays = [
    // To be deleted
    ["Fri", 12],
    ["Sat", 13],
    ["Sun", 14],
    ["Mon", 15],
    ["Tue", 16],
    ["Wed", 17],
    ["Thu", 18],
  ];

  const freeHours = [
    // To be deleted
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:30 AM",
    "5:30 PM",
    "7:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  return (
    <>
      <div className="flex items-center gap-2">
        <ArrowLeft className="text-black cursor-pointer" />
        <p className="text-black">Make an appointment</p>
      </div>

      <div className="flex flex-col gap-5 mt-2 py-4 px-3 border-[1.5px] border-gray-border rounded-xl">
        <header className="flex justify-between items-center pb-4 border-b-[1.5px] border-gray-border">
          <p className="text-gray">Choose date and time</p>

          <div className="flex gap-2">
            <CalendarDays
              className="cursor-pointer"
              onClick={() => dateInput.current.showPicker()}
            />

            <input
              ref={dateInput}
              type="month"
              min={new Date().toISOString().slice(0, 7)}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </div>
        </header>

        {/* Days */}
        <div className="flex justify-between flex-wrap py-5">
          {freeDays.map((day, index) => (
            <Day
              key={index}
              day={day[0]}
              date={day[1]}
              isActive={activeDay === index}
              onClick={() => setActiveDay(index)}
            />
          ))}
        </div>

        {/* Hours */}
        <div className="flex flex-wrap gap-4">
          {freeHours.map((hour, index) => (
            <Hour
              key={index}
              hour={hour}
              isActive={activeHour === index}
              onClick={() => setActiveHour(index)}
            />
          ))}
        </div>
        {/* Selected date and booking */}
        <div className="flex items-center py-3 justify-between">
          <div className="flex items-center gap-2">
            {activeDay !== null && activeHour !== null && (
              <>
                <CalendarDays className="text-main-blue" />
                <span>
                  {`${freeDays[activeDay][0]}, ${monthName} ${freeDays[activeDay][1]} - ${freeHours[activeHour]}`}
                </span>
              </>
            )}
          </div>

          <button className="px-10 py-3 border-[1.5px] border-main-blue rounded-sm bg-white text-main-blue font-medium transition-colors hover:bg-main-blue hover:text-white active:scale-95"
            onClick={() => { setIsPaymentOpen(true) }}
          >
            Book
          </button>
        </div>
      </div>
      {/* Payment Modal */}
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          doctor={doctor}
          appointment={
            activeDay !== null && activeHour !== null
              ? `${freeDays[activeDay][0]}, ${monthName} ${freeDays[activeDay][1]} - ${freeHours[activeHour]}`
              : ""
          }
          price={350}
        />
    </>
  );
}
