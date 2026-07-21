import { Camera, User, MapPin, LockKeyhole, LogOut } from "lucide-react";
import { user } from "../../../assets/";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { icon: User, label: "Personal information", active: true },
  { icon: LockKeyhole, label: "Password management", active: false },
];

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center w-[318px] h-[559px] rounded-[13px] p-[32px] gap-[48px] bg-neutral-blue">
      <div className="flex flex-col justify-center items-center w-[176px] h-[172px] gap-[16px]">
        <div className="relative">
          <img
            src={user}
            alt="user"
            className="w-[113px] h-[113px] gap-[8px] py-[2px] rounded-[56.5px] bg-border-avatar"
          />
          <span className="absolute left-[92px] top-[81px] flex items-center justify-center w-[24px] h-[23px] rounded-full bg-border-avatar p-px">
            <span className="flex items-center justify-center w-full h-full rounded-full bg-white/90">
              <Camera className="w-[16px] h-[16px] text-main-blue" />
            </span>
          </span>
        </div>

        <div className="flex flex-col items-center w-[176px] h-[43px] gap-[4px]">
          <h2 className="w-[176px] h-[23px] text-[20px] leading-[23px] text-center text-text-secondary">
            Seif Mohamed
          </h2>
          <div className="flex flex-row items-center w-[157px] h-[16px] gap-[3px]">
            <MapPin className="w-[16px] h-[16px] text-gray" />
            <span className="font-[Montserrat] text-[12px] leading-[15px] text-center text-gray">
              129,El-Nasr Street, Cairo
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start w-[254px] h-[176px] gap-[16px]">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-row items-center w-[254px] h-[48px] px-[16px] gap-[9px] rounded-[8px] ${item.active ? "border border-main-blue" : ""
              }`}
          >
            <item.icon className="w-[24px] h-[24px] text-text-secondary" />
            <span className="font-[Montserrat] text-[16px] leading-[20px] text-center text-text-secondary">
              {item.label}
            </span>
          </button>
        ))}

        <button onClick={handleLogout} className="flex cursor-pointer flex-row items-center w-[254px] h-[48px] px-[16px] py-[8px] gap-[8px] rounded-[6px]">
          <LogOut className="w-[24px] h-[24px] text-error" />
          <span className="font-[Montserrat] text-[16px] leading-[20px] text-center text-error">
            Log out
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
