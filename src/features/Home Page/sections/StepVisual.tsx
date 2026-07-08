import {
  Search,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  CreditCard,
  Wallet,
} from "lucide-react";

export default function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50/60 p-4">
        <div className="flex justify-center gap-1 text-blue-300">
          {"☆★☆★☆★☆★☆★☆★".split("").map((c, i) => (
            <span key={i} className={c === "★" ? "text-blue-500" : ""}>
              {c}
            </span>
          ))}
        </div>
        <div className="relative">
          <Search
            size={14}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <div className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-8 pr-3 text-xs text-slate-400">
            Search by specialty
          </div>
        </div>
        <div className="flex justify-center gap-1 text-blue-300">
          {"★☆★☆★☆★☆★☆★☆".split("").map((c, i) => (
            <span key={i} className={c === "★" ? "text-blue-500" : ""}>
              {c}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [9, 11, 12, 13, 14, 15, 16];
    return (
      <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-slate-700">
          <ChevronLeft size={14} />
          <span>July 2025</span>
          <ChevronRight size={14} />
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-blue-500">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
          {dates.map((d, i) => (
            <span
              key={d}
              className={`rounded-md py-1 text-slate-500 ${
                i === 6 ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-[11px] text-slate-600">
      <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
        <Smartphone size={14} className="text-slate-900" /> Quick checkout with
        your device
      </div>
      <div className="ml-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
        <CreditCard size={14} className="text-blue-600" /> Secure and fast card
        payments
      </div>
      <div className="ml-8 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
        <Wallet size={14} className="text-sky-600" /> Easy and safe with your
        wallet
      </div>
    </div>
  );
}