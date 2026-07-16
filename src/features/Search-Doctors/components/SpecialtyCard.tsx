import { useState } from "react";
import type { IconType } from "react-icons/lib";

interface IProps{
    id: number|string,
    name: string, 
    image?: string | null, 
    Icon: IconType, 
    specialSelectedId: number | string, 
    setSpecialSelectedId: (specialtyId: number | string) => void
}

function SpecialtyCard({id, name, image, Icon, specialSelectedId, setSpecialSelectedId}:IProps) {
    return (
        <button onClick={()=> setSpecialSelectedId(id)} className={` ${specialSelectedId===id?"bg-brand text-white border-brand": "border-gray"} border text-gray py-1 w-full flex gap-1.5 items-center justify-center rounded-xl px-1.5 overflow-hidden whitespace-nowrap transition-all duration-300`}>
            <Icon className="text-xl"/>
            <span className="text-sm font-medium">{name}</span>
        </button>
    )
}

export default SpecialtyCard
