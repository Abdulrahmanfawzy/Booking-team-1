import { useState } from "react";
import { axiosInstance } from "@/services/axiosInstance";

export default function RatingModal({
  isOpen,
  onClose,
  bookingId,
  doctorId,
}) {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;


  async function handleSubmit() {
    try {
      await axiosInstance.post("/reviews", {
        booking_id: bookingId,
        doctor_id: doctorId,
        rating,
        comment,
      });

      onClose();

    } catch (error) {
      console.error("Failed to add review:", error);
    }
  }


  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl bg-white p-6"
      >

        <h2 className="mb-4 text-xl font-bold">
          Add Review
        </h2>


        {/* Stars Component */}
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mb-4 w-full rounded border p-2"
        />


        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className="mb-4 w-full rounded border p-2"
        />


        <button
          onClick={handleSubmit}
          className="rounded-lg bg-primary px-5 py-2 text-white"
        >
          Submit Review
        </button>

      </div>

    </div>
  );
}