import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarsRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} className="text-stars text-xl" />;
        }

        if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} className="text-stars text-xl" />;
        }

        return <FaRegStar key={star} className="text-stars text-xl" />;
      })}
    </div>
  );
}
