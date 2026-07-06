import { FaStar } from "react-icons/fa";

export default function HumanRatingCard() {
  return (
    <div className="max-w-sm rounded-2xl border border-gray-border bg-white p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="size-12 rounded-full object-cover"
          />

          <div className="leading-tight">
            <h3 className="font-semibold text-slate-900">
              Nabila Reyna
            </h3>

            <p className="text-sm text-gray-500">
              30 min ago
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
          <FaStar className="text-sm text-yellow-400" />
          <span className="text-sm font-semibold text-yellow-500">
            4.5
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-500">
        Excellent service! Dr. Jessica Turner was attentive and
        thorough. The clinic was clean, and the staff were friendly.
        Highly recommend for in-person care!
      </p>
    </div>
  );
}