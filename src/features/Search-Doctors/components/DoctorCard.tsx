import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa";
import { Clock } from "lucide-react";
import type { TDoctor } from "../types/types";
import { useNavigate } from "react-router-dom";

function DoctorCard({name, address, rating, opening_hours, consultation_price, image, id}: TDoctor) {
    const firstDay = Object.keys(opening_hours)[0] as keyof typeof opening_hours;
    const firstTime = opening_hours[firstDay]?.[0];
    const navigate = useNavigate();

    return (
        <div className="p-3 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3 pb-2">
                <img src={image} alt="doctor img" height={40} width={80} className="rounded-lg bg-cover"/>
                <div className="">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray h-6 overflow-hidden">{address}</p>
                    <div className="flex gap-3 items-center mt-1">
                        <p className="flex items-center gap-1"><FaStar className="text-stars"/> {rating}</p>
                        <p className="flex items-center gap-1"><Clock className="h-4"/>{`${firstTime?.from}am - ${24-(parseInt(firstTime?.to.split(':')[0] || '0'))}pm`}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mb-2">
                <p>Price<span className="text-gray">/hour</span></p>
                <h3 className="text-error">${consultation_price}</h3>
            </div>
                <Button onClick={()=>navigate(`/appointments/${id}`)} className="w-full py-5 cursor-pointer bg-main-blue border-brand hover:bg-white hover:text-brand transition-all">Book appointment</Button>
        </div>
    )
}

export default DoctorCard
