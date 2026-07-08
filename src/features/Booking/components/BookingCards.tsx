import { CalendarRange, MapPin } from 'lucide-react'
import React from 'react'
import doctor from "@/assets/Ellipse 1538.svg"

export default function BookingCards() {
    return (
        
            <div className='card mt-5 text-xs border border-gray-400 rounded-lg w-80 p-2 space-y-3'>
                <div className='date flex items-center justify-between border-b pb-1.5'>
                    <div className='flex items-center  '>
                        <CalendarRange />
                        <h2 className='ml-2'>Monday , July 21-11:00 AM</h2>
                    </div>
                    <div>
                        <h2 className='text-blue-500'>Upcoming</h2>
                    </div>
                </div>
                <div className='docter flex items-center mt-2'>
                   <div className='doctor-image'>
                          <img src={doctor}  />
                   </div>
                   <div className='doctor-data ml-2'>
                     <h2>Jennifer Miller</h2>
                     <h2>Psychiatrist</h2>
                   </div>
                </div>
                <div className='address flex items-center'>
                   <MapPin/>
                   <h2>129, El-Nasr Street, Cairo, Egypt</h2>
                </div>
                <div className='flex justify-around space-x-1.5'>
                    <button className='border border-gray-700 w-1/2 rounded-lg py-2'>Cancel</button>
                    <button className='w-1/2 bg-blue-800 text-white rounded-lg'>Reschedule</button>
                </div>
            </div>
       
    )
}
