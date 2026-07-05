import { ArrowLeft, CalendarDays } from "lucide-react";
import { useRef } from "react";
import Day from "./Day";

export default function MakeAppointmentTabel() {
  const dateInput = useRef(null);
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <ArrowLeft className="text-black cursor-pointer" />
        <p className="text-black">Make an appointment</p>
      </div>
      {/* Tabel */}
      <div className="mt-2 py-4 px-2 w-[784px] h-[356px] border-[1.5px] border-gray-border rounded-xl"> {/* Delete fixed width */}
        <header className="flex flex-row justify-between items-center pb-4 border-b-[1.5px] border-gray-border">
          <p className="text-gray">Choose date and time</p>
          <div className="flex flex-row gap-2">
            <CalendarDays
              className="cursor-pointer"
              onClick={() => {
                dateInput.current.showPicker();
              }}
            />
            <input
              ref={dateInput}
              type="date"
              id="date"
              className="focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
          </div>
        </header>
        <section>
          {/* Choose day */}
          <div>
            <Day day={"Fri"} hour={"12"} />
          </div>
        </section>
      </div>
    </>
  );
}
