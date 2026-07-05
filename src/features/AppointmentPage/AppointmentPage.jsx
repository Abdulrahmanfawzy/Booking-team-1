import MakeAppointmentTabel from "./MakeAppointmentTabel/MakeAppointmentTabel";

export default function AppointmentPage() {



  return (
    <>
      {/* Header */}

      {/* Appiontment Page */}
      <div className="grid grid-cols-3 mx-10 gap-5">
        {/* First Column */}
        <div className="col-span-2">
          <MakeAppointmentTabel />
        </div>
        <div className="">{/* Doctor */}</div>
      </div>
    </>
  );
}
