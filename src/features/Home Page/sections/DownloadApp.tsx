import { HeartPulse } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
 
/* -------------------------------------------------------------------------
 * Phone mockup — pure CSS/SVG so there's no external image dependency.
 * Swap this out for a real app-screenshot image whenever you have one:
 *   <img src="/app-screenshot.png" className="..." />
 * ---------------------------------------------------------------------- */
 
function PhoneMockup() {
  return (
    <div className="relative h-40 w-full max-w-[220px] sm:h-48 sm:max-w-[260px]">
      {/* back phone */}
      <div className="absolute right-0 top-2 h-36 w-20 -rotate-6 rounded-[1.4rem] border-[3px] border-slate-900 bg-slate-900 shadow-xl sm:h-44 sm:w-24">
        <div className="h-full w-full rounded-[1.1rem] bg-blue-600" />
      </div>
 
      {/* front phone */}
      <div className="absolute left-0 top-0 h-40 w-24 rotate-3 rounded-[1.5rem] border-[3px] border-slate-900 bg-white shadow-2xl sm:h-48 sm:w-28">
        <div className="flex h-full w-full flex-col gap-1.5 overflow-hidden rounded-[1.2rem] bg-white p-2">
          <div className="mx-auto h-1 w-8 rounded-full bg-slate-200" />
          <div className="h-3 w-full rounded-full bg-blue-50" />
          <div className="mt-1 h-8 w-full rounded-lg bg-blue-500" />
          <div className="h-2 w-3/4 rounded-full bg-slate-100" />
          <div className="h-2 w-1/2 rounded-full bg-slate-100" />
          <div className="mt-auto grid grid-cols-3 gap-1">
            <div className="h-4 rounded-md bg-slate-100" />
            <div className="h-4 rounded-md bg-slate-100" />
            <div className="h-4 rounded-md bg-blue-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
/* -------------------------------------------------------------------------
 * Store badge button
 * ---------------------------------------------------------------------- */
 
function StoreBadge({ icon: Icon, eyebrow, label, href = "#" }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500"
    >
      <Icon size={20} />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] text-slate-300">{eyebrow}</span>
        <span className="text-sm font-medium">{label}</span>
      </span>
    </a>
  );
}
 
/* -------------------------------------------------------------------------
 * Download App card
 * ---------------------------------------------------------------------- */
 
export default function DownloadAppCard() {
  return (
    <section className="px-4 pb-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 overflow-hidden rounded-3xl bg-blue-500 px-6 py-10 sm:flex-row sm:justify-between sm:px-10 lg:px-14">
        <div className="max-w-md text-center sm:text-left">
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
            Your Health, One Tap Away
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-50/90">
            Book appointments, chat with doctors, and manage your health anytime — right from
            your phone. Download the app now and stay connected wherever you are.
          </p>
 
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            <StoreBadge icon={FaGooglePlay} eyebrow="GET IT ON" label="Google Play" />
            <StoreBadge icon={FaApple} eyebrow="Download on the" label="App Store" />
          </div>
        </div>
 
        <PhoneMockup />
      </div>
    </section>
  );
}