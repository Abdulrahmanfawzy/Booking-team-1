import { X } from "lucide-react";
import { useState } from "react";
import ClickableStarsRating from "./ClickableStarsRating";
import { ratingApi } from "../api/rating.api";

export default function RatingModal({
  closeModal,
  doctorId,
  bookingId,
}) {
  const [currentRate, setCurrentRate] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);

      await ratingApi.addRating({
        booking_id: bookingId,
        doctor_id: doctorId,
        rating: currentRate,
        comment,
      });

      closeModal(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-90 rounded-xl bg-white p-5 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-black">Your Rate</h1>

          <X
            className="text-black cursor-pointer"
            onClick={() => closeModal(false)}
          />
        </div>

        <div className="flex justify-between items-center py-4">
          <ClickableStarsRating
            currentRate={currentRate}
            setCurrentRate={setCurrentRate}
          />

          <h1 className="text-black text-3xl font-light">
            {currentRate}/5
          </h1>
        </div>

        <div>
          <h1 className="text-black">Your Review</h1>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Message"
            rows="5"
            className="w-full my-3 px-4 py-2 border border-gray rounded-md text-black placeholder-gray focus:outline-none focus:border-blue-500 resize-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-main-blue text-white h-8 rounded-sm cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Review"}
          </button>
        </div>
      </div>
    </div>
  );
}