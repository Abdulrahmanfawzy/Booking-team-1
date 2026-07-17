import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import useDoctorsQuery from "../hooks/useDoctorsQuery"
import type { TDoctor } from "../types/types"
import DoctorsSkeleton from "./DoctorsSkelton"
import DoctorCard from "./DoctorCard"
import { useEffect, useState } from "react"
import Map from "@/components/shared/Map"

export function MapModal({open, setOpen}: {open:boolean, setOpen: (open:boolean)=>void}) {

    const {isLoading,data,error} = useDoctorsQuery({gender:'', keyword:'', page:1})

const [position, setPosition] = useState<[number, number] | null>(null);    
    useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
}, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger render={<Button variant="outline">Scrollable Content</Button>} /> */}
        <DialogContent className=" w-[80vw] h-[80vh] ">
            <DialogHeader>
            <DialogTitle>24 results</DialogTitle>
            {/* <DialogDescription>
                This is a dialog with scrollable content.
            </DialogDescription> */}
            </DialogHeader>
            
            <div className="-mx-4 no-scrollbar max-h-[70vh] overflow-y-auto px-4 flex max-md:flex-col justify-between gap-8 ">
                {/* {isLoading && <DoctorsSkeleton/>} */}
                {/* {error && <p className="text-red-500">{error.message}</p>} */}

                <div className="flex flex-col gap-4">
                    {data?.data?.doctors.length>0?
                    data?.data?.doctors.map((doctor: TDoctor, i: number) => (
                        <DoctorCard key={doctor.id} {...doctor} image={doctor.image} />
                    )):
                    <h2 className="text-lg font-medium col-span-full text-center mx-auto py-6">No doctors found</h2>
                    }
                </div>

                <div className="flex-1">
                    {position && (
                        <Map position={position} markerText="موقعك" className="w-full max-md:h-90"/>
                    )}
                </div>
            </div>
        </DialogContent>
        </Dialog>
    )
}
