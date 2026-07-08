  export default function ChooseAtime(){
  if (index === 1) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [9, 11, 12, 13, 14, 15, 16];
    return (
      <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 h-40">
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
}
