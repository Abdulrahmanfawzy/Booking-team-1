import { useState } from "react"
import { FaStar } from "react-icons/fa";

let n = [1, 2, 3, 4, 5]
export default function ClickableStarsRating({currentRate,setCurrentRate}) {
    return (
        <div className="flex gap-1">
            {n.map((star) => {
                if (star > currentRate) {
                    return <FaStar onClick={() => { setCurrentRate(star) }} key={star} className="text-gray text-2xl" />
                }
                if (star == currentRate) {
                    return <FaStar onClick={() => { setCurrentRate(star) }} key={star} className="text-stars text-2xl" />
                }
                if (star < currentRate) {
                    return <FaStar onClick={() => { setCurrentRate(star) }} key={star} className="text-stars text-2xl" />
                }
            })}
        </div>
    )
}