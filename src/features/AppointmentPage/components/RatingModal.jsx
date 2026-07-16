import { X } from "lucide-react";
import { useState } from "react";
import { ratingApi } from "../api/rating.api";
import ClickableStarsRating from "./ClickableStarsRating";

export default function RatingModal({
  isOpen,
  onClose,
  bookingId,
  doctorId,
}) {
  const [currentRate, setCurrentRate] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit() {
    if (currentRate === 0) {
      alert("Please select a rating.");
      return;
    }

    try {
      setLoading(true);

      const body = {
        booking_id: bookingId,
        doctor_id: doctorId,
        rating: currentRate,
        comment: comment.trim(),
      };

      console.log("Rating Body:", body);

      const data = await ratingApi.addRating(body);

      console.log(data);

      onClose();
    } catch (error) {
      console.error(error.response?.data || error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="flex w-90 flex-col rounded-xl bg-white p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading */}
        <div className="flex items-center justify-between">
          <h1 className="text-black">Your Rate</h1>

          <X
            className="cursor-pointer text-black"
            onClick={onClose}
          />
        </div>

        {/* Rate */}
        <div className="flex flex-row items-center justify-between py-4">
          <ClickableStarsRating
            currentRate={currentRate}
            setCurrentRate={setCurrentRate}
          />

          <h1 className="text-3xl font-light text-black">
            {currentRate}/5
          </h1>
        </div>

        {/* Review */}
        <div>
          <h1 className="text-black">Your Review</h1>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Message"
            rows={5}
            className="my-3 w-full resize-none rounded-md border border-gray px-4 py-2 text-black placeholder-gray focus:border-main-blue focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="h-8 w-full rounded-sm bg-main-blue text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Review"}
          </button>
        </div>
      </div>
    </div>
  );
}