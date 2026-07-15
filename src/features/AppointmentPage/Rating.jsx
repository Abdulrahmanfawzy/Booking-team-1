import { Pencil } from "lucide-react";
import { useState } from "react";

import StarsRating from "./components/StarsRating";
import HumanRatingCard from "./components/HumanRatingCard";
import RatingModal from "./components/RatingModal";

export default function Rating({ doctor }) {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-7 mt-5">
        <header className="flex justify-between items-center">
          <h3 className="text-black font-medium">Reviews and Ratings</h3>

          <div
            className="flex items-center gap-2 text-main-blue cursor-pointer"
            onClick={() => setIsRatingModalOpen(true)}
          >
            <Pencil />
            <p>Add review</p>
          </div>
        </header>

        {/* Rating Summary */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-black font-medium">
            {doctor.rating.average}/5
          </h1>

          <div>
            <StarsRating rating={doctor.rating.average} />
            <p className="text-gray">
              {doctor.rating.count} Reviews
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-2 gap-4">
          {doctor.reviews.map((review) => (
            <HumanRatingCard
              key={review.id}
              image={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                review.patient.name
              )}`}
              name={review.patient.name}
              time={review.date}
              rating={review.rating}
              review={review.comment}
            />
          ))}
        </div>
      </div>

      {isRatingModalOpen && (
        <RatingModal closeModal={setIsRatingModalOpen} />
      )}
    </>
  );
}