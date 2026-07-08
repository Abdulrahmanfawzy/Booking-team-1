import MakeAppointmentTabel from "./MakeAppointmentTabel/MakeAppointmentTabel";
import Rating from "./Rating/Rating";
import Nav from "../../components/shared/nav/Nav";
import Footer from "../../components/shared/footer/Footer";

export default function AppointmentPage() {
  return (
    <>
      {/* Nav */}
      <Nav />
      {/* Appiontment Page */}
      <div className="grid grid-cols-3 mx-10 gap-5 py-10">
        {/* First Column */}
        <div className="col-span-2 flex flex-col gap-2">
          <MakeAppointmentTabel />
          <Rating />
        </div>
        <div className="">{/* Doctor */}</div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
