import { Heart, MessageCircleMore } from "lucide-react";
import { BsFillPeopleFill, BsAwardFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { TbMessagesFilled } from "react-icons/tb";
import StatCard from "./components/StatCard";
import { useState } from "react";
import PaymentModal from "./components/PaymentModal";
import Map from "../../components/shared/Map";

export default function DoctorProfile({ doctor }) {

  const [expanded, setExpanded] = useState(false);

  const stats = [
    {
      Icon: BsFillPeopleFill,
      value: doctor.stats.patients,
      label: "patients",
    },
    {
      Icon: BsAwardFill,
      value: doctor.stats.experience,
      label: "experience",
    },
    {
      Icon: FaStar,
      value: doctor.stats.rating,
      label: "rating",
    },
    {
      Icon: TbMessagesFilled,
      value: doctor.stats.reviews,
      label: "reviews",
    },
  ];

  return (
    <div className="relative flex flex-col gap-5 bg-gray-100 text-black rounded-xl p-5">
      {/* First Section */}
      <div className="flex justify-between">
        <Heart className="cursor-pointer" />

        <div className="text-center flex flex-col gap-1">
          <img
            src={doctor.image}
            className="rounded-full"
            alt={doctor.name}
          />

          <p className="font-semibold">{doctor.name}</p>
          <p className="text-gray">{doctor.specialty}</p>
        </div>

        <MessageCircleMore className="cursor-pointer" />
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-4 gap-2">
        {stats.map(({ Icon, value, label }) => (
          <StatCard
            key={label}
            icon={<Icon />}
            value={value}
            label={label}
          />
        ))}
      </div>

      {/* About me section */}
      <div>
        <h2 className="text-xl">About me</h2>

        <p className="text-gray text-sm">
          {expanded
            ? doctor.about
            : `${doctor.about.slice(0, 85)}... `}

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-main-blue font-medium hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </p>
      </div>

      {/* Location */}
      <Map
        center={[30.0444, 31.2357]}
        markerPosition={[30.0444, 31.2357]}
        popupContent={
          <>
            <h3 className="font-bold">Dr Ahmed <br />Dentist</h3>
          </>
        }
      />
    </div>
  );
}