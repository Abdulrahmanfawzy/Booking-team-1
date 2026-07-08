
import { MapPin, Search, Navigation } from "lucide-react";
 
const pins = [
  { top: "20%", left: "62%", label: "Cairo", doctors: 48 },
  { top: "42%", left: "18%", label: "Giza", doctors: 31 },
  { top: "70%", left: "78%", label: "Alexandria", doctors: 27 },
];
 
const SPECIALTIES = [
  "All",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Pediatrics",
  "Neurology",
];
 
export default function FindCare() {
  return (
    <section className="flex flex-col items-center px-4 py-14 sm:py-20 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="mx-auto w-full max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          <Navigation size={12} />
          Location-based search
        </span>
        <h2 className="mt-4 font-serif text-2xl text-slate-900 sm:text-3xl lg:text-4xl">
          Find care near you
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Browse top-rated specialists in your city and book a confirmed slot in
          minutes — no waiting, no phone calls.
        </p>
      </div>
 
      {/* Search bar */}
      <div className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm sm:flex-row sm:items-center sm:rounded-full sm:py-2.5 sm:px-4">
        <div className="flex flex-1 items-center gap-2 px-2 sm:px-0">
          <Search size={16} className="shrink-0 text-slate-400" />
          <input
            type="text"
            placeholder="City, area, or hospital name…"
            className="w-full min-w-0 flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <button className="w-full shrink-0 rounded-full bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:w-auto sm:py-1.5">
          Search
        </button>
      </div>
 
      {/* Specialty pills */}
      <div className="mx-auto mt-5 flex w-full max-w-2xl flex-wrap justify-center gap-2">
        {SPECIALTIES.map((s) => (
          <button
            key={s}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition sm:px-4 ${
              s === "All"
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
 
      {/* Map card */}
      <div className="relative mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-md">
        {/* Decorative SVG grid (mimics a map background) */}
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
 
        {/* Decorative road-like lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 180 Q 200 120 400 200 T 800 160"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 100 0 Q 180 150 160 300 T 200 480"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 300 480 Q 450 350 600 400 T 900 320"
            stroke="#64748b"
            strokeWidth="2"
            fill="none"
          />
        </svg>
 
        {/* Map area */}
        <div className="relative h-64 sm:h-80 lg:h-96">
          {/* Location pins */}
          {pins.map((pin) => (
            <div
              key={pin.label}
              className="absolute -translate-x-1/2 -translate-y-full"
              style={{ top: pin.top, left: pin.left }}
            >
              {/* Popup card */}
              <div className="mb-1 flex items-center gap-1 whitespace-nowrap rounded-lg border border-slate-100 bg-white px-2 py-1 shadow-md sm:gap-1.5 sm:px-2.5 sm:py-1.5">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white sm:h-5 sm:w-5">
                  <MapPin size={10} className="sm:hidden" />
                  <MapPin size={11} className="hidden sm:block" />
                </span>
                <span className="text-[10px] font-semibold text-slate-800 sm:text-[11px]">
                  {pin.label}
                </span>
                <span className="hidden text-[10px] text-slate-400 xs:inline">
                  {pin.doctors} doctors
                </span>
              </div>
              {/* Pin dot */}
              <div className="mx-auto h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow" />
              {/* Ripple */}
              <div className="mx-auto mt-0.5 h-5 w-5 -translate-x-1 animate-ping rounded-full bg-blue-400/30" />
            </div>
          ))}
 
          {/* "You are here" dot */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: "55%", left: "45%" }}
          >
            <div className="h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-lg" />
            <div className="absolute inset-0 animate-ping rounded-full bg-green-400/40" />
          </div>
        </div>
 
        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-slate-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Your location
            <span className="ml-3 h-2.5 w-2.5 rounded-full bg-blue-600" />
            Care providers
          </div>
          <button className="self-start text-xs font-medium text-blue-600 transition hover:underline sm:self-auto">
            Open full map →
          </button>
        </div>
      </div>
    </section>
  );
}