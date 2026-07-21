import {
  X,
  Settings,
  CreditCard,
  Heart,
  Shield,
  LogOut,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import User from '@/assets/user.svg'

const menuItems = [
  {
    title: "Payment Method",
    icon: CreditCard,
  },
  {
    title: "Favorite",
    icon: Heart,
  },
  {
    title: "Settings",
    icon: Settings,
  },
  {
    title: "Privacy Policy",
    icon: Shield,
  },
];

export default function MobileMenu() {
  const [profileClicked, setProfileClicked] = useState(false);
  const token = localStorage.getItem("auth_token");
  const handleClick = () => {
    setProfileClicked((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setProfileClicked(false);
  };
  return (
    <div className="mt-2">
      <div className="">
        {token ? (
          <button onClick={handleClick} className={`cursor-pointer  ${profileClicked ? "block" : ""}`}>
            <img
              src={User}
              alt="User"
              className=""
            />
          </button>
        ) : (
          <Link
            to="/login"
            className="rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Log in
          </Link>
        )}
      </div>
      <div className={`w-[100%] h-[100vh] lg:w-80 lg:h-85 absolute top-0 lg:top-17 right-0 lg:right-10 lg:rounded-3xl lg:pt-5 lg:pb-5  ${profileClicked ? "block" : "hidden"} bg-neutral-blue z-50 `}>
        <div className="my-8 mx-6 flex justify-end lg:hidden">
          <button onClick={handleClick} className="rounded-xl bg-gray-100 p-3">
            <X size={24} />
          </button>
        </div>
        {/* User */}

        <div className="mb-10 mx-3 flex items-center justify-between lg:mb-5 lg:gap-2 lg:pt-5">

          <div className="flex items-center gap-4 lg:gap-2">

            <img
              src={User}
              alt=""
              className="h-16 w-16 rounded-full object-cover lg:w-10 lg:h-10"
            />

            <div>

              <h2 className="text-2xl font-semibold lg:text-lg text-text-secondary">
                Seif Mohamed
              </h2>

              <div className="flex items-center gap-2 lg:gap-1">

                <MapPin size={16} />

                <span className="text-sm lg:text-[10px] text-gray ">
                  129,El-Nasr Street, Cairo
                </span>

              </div>

            </div>

          </div>

          <button>
            <Settings
              size={26}
              className="text-blue-600 lg:mr-5"
              strokeWidth={1}
            />
          </button>

        </div>

        {/* Menu */}

        <div className="space-y-8 mx-5 lg:space-y-5 lg:mx-8 ">

          {menuItems.map(({ title, icon: Icon }) => (

            <button
              key={title}
              className="flex w-full items-center justify-between"
            >

              <div className="flex items-center gap-4 lg:gap-2">

                <Icon
                  size={24}
                  className="text-text-secondary"
                  strokeWidth={1}
                />

                <span className="text-xl font-medium text-text-secondary lg:text-xs">
                  {title}
                </span>

              </div>

              <ChevronRight
                size={22}
                className="text-gray-400"
                strokeWidth={1}
              />

            </button>

          ))}

        </div>

        {/* Logout */}

        <button
          className="mt-12 mx-2 flex items-center gap-2 lg:gap-2 lg:mt-10 text-red-500 mx-6 lg:mx-9"
          onClick={handleLogout}
        >

          <LogOut size={24} className="lg:size-5" strokeWidth={1} />

          <span className="text-xl font-medium lg:text-xs">
            Log out
          </span>

        </button>

      </div>

    </div>

  );
}