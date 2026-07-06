import MakeAppointmentTabel from "./MakeAppointmentTabel/MakeAppointmentTabel";
import Rating from "./Rating/Rating";

export default function AppointmentPage() {
  return (
    <>
      {/* Header */}

      {/* Appiontment Page */}
      <div className="grid grid-cols-3 mx-10 gap-5">
        {/* First Column */}
        <div className="col-span-2 flex flex-col gap-2">
          <MakeAppointmentTabel />
          <Rating />
        </div>
        <div className="">{/* Doctor */}</div>
      </div>
    </>
  );
}
