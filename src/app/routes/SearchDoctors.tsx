import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import DoctorCard from '@/features/Search-Doctors/components/DoctorCard'
import Filters from '@/features/Search-Doctors/components/Filters'
import { DoctorsSidebar } from '@/features/Search-Doctors/components/Sidbar'
import SpecialtyCard from '@/features/Search-Doctors/components/SpecialtyCard'
import FilterBtn from '@/features/Search-Doctors/components/toolbar/FilterBtn'
import MapBtn from '@/features/Search-Doctors/components/toolbar/MapBtn'
import { SearchInput } from '@/features/Search-Doctors/components/toolbar/SearchInput'
import { useState } from 'react'

function SearchDoctorsPage() {
    const [openSide, setOpenSide]= useState(true)
    return (
        // //  sidebar provide is refrence to Full page 
        // <SidebarProvider open={openSide} className='max-w-7xl mx-auto px-5'>
        //     <DoctorsSidebar/>
        
        <div className="max-w-7xl flex flex-col gap-6 py-4 px-10 mx-auto" id="search-doctors">

                    <div className="flex gap-5 justify-between">
                        <FilterBtn open={openSide} setOpen={setOpenSide}/>
                        <SearchInput />
                        <MapBtn/>
                    </div>

                    <div className="flex justify-between max-md:flex-col">
                        <Filters open={openSide} />

                        <div className="flex flex-col gap-5 w-full overflow-hidden">
                            <div className="flex flex-col gap-4">
                                <h2 className='text-2xl '>Choose Specialties</h2>

                                <Carousel opts={{align: "start",}} className="w-full">
                                    <CarouselContent >
                                            {Array.from({length:14}, (_,i)=>(
                                                <CarouselItem key={i} className='basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8'>
                                                    <div className="max-w-full px-2">
                                                        <SpecialtyCard/>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                                

                                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {Array.from({length:6}, ()=><DoctorCard/>)}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <Button className='py-5 px-15 bg-white border-main-blue text-main-blue'>Last Page</Button>
                                <Button className='py-5 px-15 bg-white border-main-blue text-main-blue'>Next Page</Button>
                            </div>

                        </div>
                    </div>
        </div>
            // <DoctorCard/>  
        // </SidebarProvider>
    )
}

export default SearchDoctorsPage
