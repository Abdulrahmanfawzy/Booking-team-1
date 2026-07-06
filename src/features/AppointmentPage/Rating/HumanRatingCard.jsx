import { FaStar } from "react-icons/fa";

export default function HumanRatingCard({
  image,
  name,
  time,
  rating,
  review,
}) {
  return (
    <div className="max-w-sm rounded-2xl border border-gray-border bg-white p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={name}
            className="size-12 rounded-full object-cover"
          />

          <div className="leading-tight">
            <h3 className="font-semibold text-slate-900">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              {time}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
          <FaStar className="text-sm text-yellow-400" />
          <span className="text-sm font-semibold text-yellow-500">
            {rating}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-500">
        {review}
      </p>
    </div>
  );
}