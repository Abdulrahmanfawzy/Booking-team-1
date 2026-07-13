import MakeAppointmentTabel from "./MakeAppointmentTabel";
import Rating from "./Rating";
import DoctorProfile from "./DoctorProfile";



export default function AppointmentPage() {
  const doctor = {
    name: "Dr. Jessica Turner",
    specialty: "Pulmonologist",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    about:
      "Dr. Jessica Turner, a board-certified Pulmonologist with over 8 years of experience in diagnosing and treating a wide range of respiratory and pulmonary conditions.",
    locationImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VMFFPLVUYXidyeAdrOa37UoDZC9I5Zy7-0s06oO3Yg&s=10",
    stats: {
      patients: "2,000+",
      experience: "10+",
      rating: "4.5",
      reviews: "1,872",
    },
  };

  return (
    <>

      {/* Appointment Page */}
      <div className="grid grid-cols-3 gap-5 py-10">
        {/* First Column */}
        <div className="col-span-2 flex flex-col gap-2">
          <MakeAppointmentTabel doctor={doctor} />
          <Rating />
        </div>

        {/* second column */}
        <div>
          <DoctorProfile doctor={doctor} />
        </div>
      </div>

   
    </>
  );
}