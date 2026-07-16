import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";

import { bookingApi } from "./api/booking.api.js";
import StarsRating from "./components/StarsRating";
import HumanRatingCard from "./components/HumanRatingCard";
import RatingModal from "./components/RatingModal";

export default function Rating({ doctor }) {
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const data = await bookingApi.getBookings();

        const booking = data.data.find(
          (item) =>
            Number(item.doctor.id) === Number(doctor.id) &&
            item.status === "completed"
        );

        if (booking) {
          setBookingId(booking.id);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchBookings();
  }, [doctor.id]);

  return (
    <>
      <div className="flex flex-col gap-7 mt-5">
        <header className="flex justify-between items-center">
          <h3 className="text-black font-medium">
            Reviews and Ratings
          </h3>

          {bookingId && (
            <div
              className="flex items-center gap-2 text-main-blue cursor-pointer"
              onClick={() => setIsRatingModalOpen(true)}
            >
              <Pencil />
              <p>Add review</p>
            </div>
          )}
        </header>

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

      <RatingModal
        isOpen={isRatingModalOpen}
        onClose={() => setIsRatingModalOpen(false)}
        doctorId={doctor.id}
        bookingId={bookingId}
      />
    </>
  );
}