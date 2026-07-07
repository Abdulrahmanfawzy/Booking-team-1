import type { IconType } from "react-icons/lib";
import { TbDental } from "react-icons/tb";

function SpecialtyCard({icon,title}:{icon:IconType ,title:string}) {
    return (
        <button className="border border-gray text-gray py-1 flex gap-1.5 items-center rounded-xl px-4">
            {/* {icon} */}
            <TbDental className="text-xl"/>
            <span>Title</span>
        </button>
    )
}

export default SpecialtyCard
