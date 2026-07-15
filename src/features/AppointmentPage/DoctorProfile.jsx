import { Heart, MessageCircleMore } from "lucide-react";
import { BsFillPeopleFill, BsAwardFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { TbMessagesFilled } from "react-icons/tb";
import { useState } from "react";

import StatCard from "./components/StatCard";
import Map from "../../components/shared/Map";

export default function DoctorProfile({ doctor }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 85;
  const isLongText = doctor.about.length > MAX_LENGTH;

  const stats = [
    {
      Icon: BsFillPeopleFill,
      value: "--",
      label: "patients",
    },
    {
      Icon: BsAwardFill,
      value: `${doctor.experience_years}+`,
      label: "experience",
    },
    {
      Icon: FaStar,
      value: doctor.rating.average,
      label: "rating",
    },
    {
      Icon: TbMessagesFilled,
      value: doctor.rating.count,
      label: "reviews",
    },
  ];

  console.log(doctor.location);
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
          <p className="text-gray">{doctor.specialty.name}</p>
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

      {/* About me */}
      <div>
        <h2 className="text-xl">About me</h2>

        <p className="text-gray text-sm">
          {isLongText ? (
            <>
              {expanded
                ? doctor.about
                : `${doctor.about.slice(0, MAX_LENGTH)}... `}

              <button
                onClick={() => setExpanded(!expanded)}
                className="text-main-blue font-medium hover:underline"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            </>
          ) : (
            doctor.about
          )}
        </p>
      </div>
      {/* Location */}
      <Map
        center={[
          doctor.location.latitude,
          doctor.location.longitude,
        ]}
        markerPosition={[
          doctor.location.latitude,
          doctor.location.longitude,
        ]}
        popupContent={
          <>
            <h3 className="font-bold">{doctor.name}</h3>
            <p>{doctor.specialty.name}</p>
            <p>{doctor.location.address}</p>
          </>
        }
      />
    </div>
  );
}