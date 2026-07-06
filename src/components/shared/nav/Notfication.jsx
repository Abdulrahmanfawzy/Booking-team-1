import {X,Settings,CreditCard,Heart,Shield,LogOut,ChevronRight,MapPin,Bell,  Clock3,
  Check,
  CalendarX2,} from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    title: "Upcoming Appointment",
    description: "Reminder: You have an appointment with Dr. Emily Walker.",
    time: "1h",
    icon: Clock3,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Appointment completed",
    description: "You have successfully booked your appointment.",
    time: "3h",
    icon: Check,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Appointment Cancelled",
    description: "You have successfully cancelled your appointment.",
    time: "4h",
    icon: CalendarX2,
    bg: "bg-red-100",
    color: "text-red-500",
  },
];

export default function MobileMenu() {
  const [profileClicked, setProfileClicked] = useState(false);

  const handleClick = () => {
    setProfileClicked((prev) => !prev);
  };
  return (
    <div className="mt-2">
        <div className="">
      <button
        onClick={handleClick}
        className={`hidden md:flex lg:flex mb-2 h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-neutral-blue shadow-sm transition hover:bg-gray-100 ${profileClicked ? "block" : ""}`}
        aria-label="Menu"
      >
        <Bell  strokeWidth={1.5} className="text-slate-700" size={20} />
      </button>
        </div>
        <div className={`w-[100%] h-[100vh] lg:w-80 lg:h-95 absolute top-0 lg:top-17 right-0 lg:right-10 lg:rounded-3xl lg:pt-5 lg:pb-5  ${profileClicked ? "block" : "hidden"} bg-neutral-blue z-50 `}>
        <div className="my-8 mx-6 flex justify-end lg:hidden">
          <button onClick={handleClick} className="rounded-xl bg-gray-100 p-3">
            <X size={24} />
          </button>
        </div>
        {/* User */}

        <div className="mb-10 mx-3 flex items-center justify-between lg:mb-5 lg:gap-2 lg:pt-5">

          <div className="flex items-center gap-4 lg:gap-2">
            <div>
              <h2 className="text-2xl font-semibold lg:text-lg text-text-secondary flex justify-center">
                Your Notification
              </h2>
            </div>
          </div>

        </div>

        {/* Menu */}

        <div className="space-y-8 mx-5 lg:space-y-5 lg:mx-1 lg:gap-2 lg:mx-2 lg:space-y-2 lg:px-2">

          {notifications.map(({ title, description, time, icon: Icon, bg, color }, index) => (

                  <button
        key={index}
        className="flex w-full items-start justify-between px-6 py-4 transition hover:bg-gray-50 lg:px-2 lg:py-2 rounded-lg "
      >
        <div className="flex gap-4 ">

          <div
            className={`flex h-15 w-15 items-center justify-center rounded-full ${bg} lg:h-12 lg:w-12`}
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className={color}
            />
          </div>

          <div className="text-left">

            <h3 className="text-lg text-text-secondary lg:text-base">
              {title}
            </h3>

            <p className="mt-1 w-48 text-[14px] leading-5 text-gray-500 lg:text-[11px] lg:w-48">
              {description}
            </p>

          </div>

        </div>

        <span className="text-gray-400 lg:text-xs">
          {time}
        </span>
      </button>
          ))}

        </div>
      </div>
    </div>
    
  );
}
