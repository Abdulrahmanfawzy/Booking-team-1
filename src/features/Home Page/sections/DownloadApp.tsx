
import { Star } from "lucide-react";
 
/**
 * NOTE on the heading font:
 * The design calls for Playfair Display. Your project currently ships
 * @fontsource-variable/geist and @fontsource/montserrat, but not Playfair.
 * To match exactly, install it:
 *
 *   npm install @fontsource/playfair-display
 *
 * then import it once (e.g. in main.tsx):
 *
 *   import "@fontsource/playfair-display/700.css";
 *
 * and add it to your Tailwind theme, e.g. in your CSS:
 *
 *   @theme {
 *     --font-display: "Playfair Display", ui-serif, Georgia, serif;
 *   }
 *
 * Until then this component falls back to `font-serif` (system serif stack)
 * via the `font-display` class below — swap the class/theme once installed.
 */
 
function GooglePlayBadge() {
  return (
    <button
      type="button"
      className="flex items-center gap-2.5 rounded-lg bg-[#0B1220] px-4 py-2.5 transition-opacity hover:opacity-90"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0">
        <path fill="#00D2FF" d="M3.6 2.6c-.4.4-.6.9-.6 1.6v15.6c0 .7.2 1.2.6 1.6l.1.1L13 12v-.2L3.7 2.5l-.1.1z" />
        <path fill="#00F076" d="M16.1 15.1 13 12v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.8 2z" />
        <path fill="#FF3A44" d="M16.2 15 13 11.8 3.6 21.2c.4.4 1 .4 1.7 0z" />
        <path fill="#FFCF00" d="M16.2 8.6 5.3 2.4c-.7-.4-1.3-.4-1.7 0L13 11.8z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-white/70">GET IT ON</span>
        <span className="block text-base font-semibold text-white">
          Google Play
        </span>
      </span>
    </button>
  );
}
 
function AppleStoreBadge() {
  return (
    <button
      type="button"
      className="flex items-center gap-2.5 rounded-lg bg-[#0B1220] px-4 py-2.5 transition-opacity hover:opacity-90"
    >
      <svg viewBox="0 0 384 512" className="h-7 w-7 shrink-0 fill-white">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 8 184.5 8 273c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-65.7-90-65.7-91.4zM256.8 88.7c26.9-32 24.5-61.2 23.7-71.7-23.8 1.4-51.3 16.4-67 34.9-17.3 19.8-27.5 44.3-25.3 71.9 26.2 2 50.1-11.5 68.6-35.1z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-white/70">Download on the</span>
        <span className="block text-base font-semibold text-white">
          Apple Store
        </span>
      </span>
    </button>
  );
}
 
/** A tiny mocked app screen used inside each phone frame. */
function AppScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col bg-white p-2.5">
      <div className="flex items-center justify-between px-0.5">
        <div className="h-2 w-14 rounded-full bg-slate-200" />
        <div className="h-2 w-2 rounded-full bg-slate-200" />
      </div>
 
      <div className="mt-2.5 rounded-xl bg-blue-800 p-3">
        <p className="text-[10px] font-medium text-white/80">Book a doctor</p>
        <p className="mt-1 text-sm font-bold leading-tight text-white">
          Consult a doctor near you
        </p>
        <div className="mt-2 flex items-center gap-1 text-[9px] text-amber-300">
          <Star className="h-2.5 w-2.5 fill-amber-300" />
          4.8 rating
        </div>
      </div>
 
      {!compact && (
        <div className="mt-2.5 flex flex-1 flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-slate-100 p-1.5"
            >
              <div className="h-7 w-7 shrink-0 rounded-md bg-slate-100" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-16 rounded-full bg-slate-200" />
                <div className="h-1.5 w-10 rounded-full bg-slate-100" />
              </div>
              <div className="h-4 w-4 rounded-full bg-blue-100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 
function PhoneFrame({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`h-[300px] w-[150px] rounded-[28px] border-[6px] border-[#0B1220] bg-[#0B1220] shadow-[0_25px_45px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[22px]">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-xl bg-[#0B1220]" />
        <AppScreen compact={compact} />
      </div>
    </div>
  );
}
 
export default function HealthAppCTA() {
  return (
    <section className="relative z-10 mb-[-180px] px-4">
      <div
        className="mx-auto flex max-w-[1180px] flex-col overflow-hidden rounded-[24px] bg-[#6A93CC] px-6 py-10 shadow-[0_30px_60px_rgba(0,0,0,0.15)] sm:px-10 md:min-h-[320px] md:flex-row md:items-center md:px-[70px] md:py-[60px]"
      >
        {/* Left content */}
        <div className="flex w-full flex-col items-center text-center md:w-[55%] md:items-start md:text-left">
          <h2 className="font-display text-[35px] font-bold leading-tight text-white">
            Your Health, One Tap Away
          </h2>
 
          <p className="mt-4 max-w-[620px] text-base leading-[1.5] text-white/90 sm:text-lg">
            Book appointments, chat with doctors, and manage your health
            anytime—right from your phone. Download the app now and stay
            connected wherever you are.
          </p>
 
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 md:justify-start">
            <GooglePlayBadge />
            <AppleStoreBadge />
          </div>
        </div>
 
        {/* Right content: overlapping phones */}
        <div className="relative mt-10 flex h-[260px] w-full items-center justify-center md:mt-0 md:h-[300px] md:w-[45%] md:justify-end md:pr-2">
          <PhoneFrame
            className="absolute rotate-[8deg] opacity-90"
            compact
          />
          <PhoneFrame className="relative rotate-[-18deg] md:translate-x-4" />
        </div>
      </div>
    </section>
  );
}