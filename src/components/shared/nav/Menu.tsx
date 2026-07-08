import { MenuIcon, X ,Bell } from "lucide-react"
import { useState } from "react";
export default function Menu() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(true);
  };

  return (
    <div className="z-50">
      <button
        onClick={handleClick}
        className={`flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-neutral-blue shadow-sm transition hover:bg-gray-100 ${menuClicked ? "hidden" : "block"}`}
        aria-label="Menu"
      >
        <MenuIcon  strokeWidth={1.5} className="text-slate-700" size={20} />
      </button>

     <div
  className={`${
    menuClicked ? "flex" : "hidden"
  } items-center justify-between gap-x-2 `}
>
  {/* Navigation Buttons */}
  <div className="flex items-center gap-x-2">
    <button className="px-2 text-xs md:text-md lg:text-lg font-normal text-text-dark transition hover:text-primary bg-neutral-blue p-2 rounded-md">
      Home
    </button>

    <button className="px-2 text-xs md:text-md lg:text-lg font-normal text-text-dark transition hover:text-primary bg-neutral-blue p-2 rounded-md">
      Doctor
    </button>

    <button className="px-2 text-xs md:text-md lg:text-lg font-normal text-text-dark transition hover:text-primary bg-neutral-blue p-2 rounded-md">
      Pharmacy
    </button>
  </div>

  {/* Close Button */}
<button onClick={() => setMenuClicked(false)} className="flex h-10 w-10 items-center justify-center self-end rounded-xl border border-gray-200 bg-neutral-blue text-text-dark transition hover:bg-gray-100 sm:self-auto" > <X size={20} strokeWidth={1.5} /> </button>
</div>
    </div>
  );
}
