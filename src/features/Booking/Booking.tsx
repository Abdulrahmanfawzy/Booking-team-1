import { ArrowDown, CalendarRange } from 'lucide-react'
import React from 'react'
import BookingCards from './components/BookingCards'

export default function Booking() {
    return (
        <div className='container mx-auto py-5'>
            <div className='flex justify-between items-center'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl'>Your Appointments</h1>
                    <ul className='flex space-x-4 items-center '>
                        <li className='text-white bg-blue-800 px-5 py-1 rounded-lg'>All</li>
                        <li>Upcoming</li>
                        <li>Completed</li>
                        <li>Canceled</li>
                    </ul>
                </div>
                <div className='flex items-center justify-between border w-80 p-2 rounded-lg' >
                    <div className='flex items-center'>
                        <CalendarRange />
                        <h2 className='ml-2'>Monday ,July 21</h2>
                    </div>
                    <div>
                        <ArrowDown />
                    </div>
                </div>
            </div>
            <BookingCards/>
        </div>
    )
}
