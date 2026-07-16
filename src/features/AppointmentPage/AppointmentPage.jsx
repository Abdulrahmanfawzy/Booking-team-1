import { useEffect, useState } from "react";
import MakeAppointmentTabel from "./MakeAppointmentTabel";
import Rating from "./Rating";
import DoctorProfile from "./DoctorProfile";
import { appointmentApi } from "./api/appointment.api.js";

export default function AppointmentPage() {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const data = await appointmentApi.getDoctor(20);

        setDoctor(data.data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctor();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctor) {
    return <div>Doctor not found.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5 py-10">
      <div className="col-span-2 flex flex-col gap-2">
        <MakeAppointmentTabel doctor={doctor} />
        <Rating doctor={doctor} />
      </div>

      <div>
        <DoctorProfile doctor={doctor} />
      </div>
    </div>
  );
}