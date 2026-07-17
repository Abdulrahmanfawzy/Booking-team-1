import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DoctorCard from "@/features/Search-Doctors/components/DoctorCard";
import DoctorsSkeleton from "@/features/Search-Doctors/components/DoctorsSkelton";
import Filters from "@/features/Search-Doctors/components/Filters";
import { MapModal } from "@/features/Search-Doctors/components/MapModal";
import { DoctorsSidebar } from "@/features/Search-Doctors/components/Sidbar";
import SpecialtyCard from "@/features/Search-Doctors/components/SpecialtyCard";
import SpecialtiesSkeleton from "@/features/Search-Doctors/components/SpecialtySeklton";
import FilterBtn from "@/features/Search-Doctors/components/toolbar/FilterBtn";
import MapBtn from "@/features/Search-Doctors/components/toolbar/MapBtn";
import { SearchInput } from "@/features/Search-Doctors/components/toolbar/SearchInput";
import { specialtyIcons } from "@/features/Search-Doctors/data";
import useDoctorsQuery from "@/features/Search-Doctors/hooks/useDoctorsQuery";
import useSpecialistsQuery from "@/features/Search-Doctors/hooks/useSpecialistsQuery";
import type { TDoctor } from "@/features/Search-Doctors/types/types";

import { useState } from "react";
import { parseAsInteger, useQueryState } from 'nuqs'

function SearchDoctorsPage() {

    const [openSide, setOpenSide] = useState(true);
    const [openMap, setOpenMap] = useState(false);

    const { isLoading: specialistsLoad, data: specialists, error: specialistsError } = useSpecialistsQuery();

    // const [specialSelectedId, setSpecialSelectedId]= useState<number | string>('');
    // const [gender, setGender]= useState<string>('');
    // const [keyword, setKeyword]= useState<string>('');
    // const [pageNum, setPageNum]= useState<number>(1);
    const [specialSelectedId, setSpecialSelectedId]= useQueryState('specialist_id', parseAsInteger);
    const [gender, setGender]= useQueryState('gender', { defaultValue: ''});
    const [keyword, setKeyword]= useQueryState('keyword', {defaultValue: ''});
    const [pageNum, setPageNum]= useQueryState('page', parseAsInteger.withDefault(1));

    const {isLoading: doctorsLoad,data: doctorsList,error: doctorsError} = useDoctorsQuery({specialSelectedId: specialSelectedId, gender:gender, keyword:keyword, page:pageNum})
    
    return (
        <div
        className="max-w-7xl flex flex-col gap-6 py-8 mx-auto"
        id="search-doctors"
        >
        <div className="flex gap-5 justify-between ">
            <FilterBtn open={openSide} setOpen={setOpenSide} />
            <SearchInput numberOfResults={doctorsList?.data?.doctors?.length || 0} keyword={keyword} setKeyword={setKeyword} />
            <MapBtn open={openMap} setOpen={setOpenMap} />
        </div>

        <div className="flex justify-between max-md:flex-col">
            <Filters open={openSide} />

            <div className="flex flex-col gap-5 w-full overflow-hidden">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl ">Choose Specialties</h2>

                {specialistsLoad && <SpecialtiesSkeleton/>}
                {specialistsError && <p className="text-red-500">{specialistsError.message}</p>}

                <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                    {specialists?.data.map((item, i) => (
                        <div className="w-full mx-2">
                            <CarouselItem key={item.id} className="basis-1/3 md:basis-1/4 lg:basis-1/7 mx-1">
                                    <SpecialtyCard id={item.id} name={item.name} Icon={specialtyIcons[i]} specialSelectedId={specialSelectedId} setSpecialSelectedId={setSpecialSelectedId}/>
                            </CarouselItem>
                        </div>
                    ))}
                </CarouselContent>
                {doctorsList&& <CarouselPrevious/>}
                { doctorsList&& <CarouselNext /> }
                </Carousel>

                {doctorsLoad && <DoctorsSkeleton/>}
                {doctorsError && <p className="text-red-500">{doctorsError.message}</p>}

                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 px-1 justify-content-center">
                {doctorsList?.data?.doctors.length>0?
                doctorsList?.data?.doctors.map((doctor: TDoctor, i: number) => (
                    <DoctorCard key={doctor.id} {...doctor} image={doctor.image} />
                )):
                <h2 className="text-lg font-medium col-span-full text-center mx-auto py-6">No doctors found</h2>
                }
            </div>
            </div>
            {doctorsList?.data?.doctors.length>0 && <div className="flex justify-between mt-2">
                <Button className="py-5 px-15 bg-white border-main-blue text-main-blue cursor-pointer hover:bg-white">Last Page</Button>
                <Button className="py-5 px-15 bg-white border-main-blue text-main-blue cursor-pointer hover:bg-white">Next Page</Button>
            </div>}
            </div>
        </div>

        <MapModal open={openMap} setOpen={setOpenMap} />
    </div>
    );
}

export default SearchDoctorsPage;
