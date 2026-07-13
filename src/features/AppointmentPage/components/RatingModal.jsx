import {X} from 'lucide-react'
import { useState } from "react";
import ClickableStarsRating from "./ClickableStarsRating";


export default function RatingModal({closeModal}) {
    let [currentRate, setCurrentRate] = useState(0)
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="w-90 rounded-xl bg-white p-5 flex flex-col">
                {/* Heading */}
                <div className='flex items-center justify-between'>
                    <h1 className="text-black">Your Rate</h1>
                    <X className='text-black cursor-pointer' onClick={()=>{closeModal(false)}} />
                </div>
                {/* Rate */}
                <div className="flex flex-row justify-between items-center py-4">
                    <ClickableStarsRating currentRate={currentRate} setCurrentRate={setCurrentRate} />
                    <h1 className="text-black text-3xl font-light">{`${currentRate}/5`}</h1>
                </div>
                {/* Messege Input */}
                <div>
                    <h1 className="text-black">Your Review</h1>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                        className="w-full my-3 px-4 py-2 border border-gray rounded-md text-black placeholder-gray focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                    <button type="submit" className="w-full bg-main-blue text-white h-8 rounded-sm cursor-pointer ">Send Review</button>
                </div>
            </div>
        </div>
    )
}