import { Button } from "@/components/ui/button"
import { FaStar } from "react-icons/fa";
import svg from "../../../assets/navicon.jpg"
import { Clock } from "lucide-react";

function DoctorCard({title, location, rating, time, salary}:{}) {
    return (
        <div className="p-3 rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3 pb-2">
                <img src={svg} alt="doctor img" width={70} className="rounded-lg"/>
                <div className="">
                    <h3 className="font-semibold">Mohamed Hassan</h3>
                    <p className="text-sm text-gray">Orthopedic | El-nasr Hospital</p>
                    <div className="flex gap-3 items-center mt-1">
                        <p className="flex items-center gap-1"><FaStar className="text-stars"/> 4.8</p>
                        <p className="flex items-center gap-1"><Clock className="h-4"/> 9:30am - 8:00pm</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mb-2">
                <p>Price<span className="text-gray">/hour</span></p>
                <h3 className="text-error">$350</h3>
            </div>
            <Button className="w-full py-5 cursor-pointe bg-main-blue">Book appointment</Button>
        </div>
    )
}

export default DoctorCard
