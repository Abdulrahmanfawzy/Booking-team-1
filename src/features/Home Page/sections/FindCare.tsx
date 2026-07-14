import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import Map from "@/components/shared/Map";

interface NearbyDoctor {
  id: number;
  latitude: number;
  longitude: number;
  [key: string]: unknown;
}

interface Props {
  position: [number, number] | null;
  nearbyDoctors: NearbyDoctor[];
}

export default function FindCare({ position, nearbyDoctors = [] }: Props) {
  return (
    <section
      className={cn(
        "flex",
        "flex-col",
        "lg:flex-row",
        "items-center",
        "gap-10",
        "px-4",
        "py-14",
        "sm:px-6",
        "sm:py-20",
        "lg:px-10"
      )}
    >
      <div className={cn("w-full", "lg:w-1/2")}>
        <div className={cn("w-full", "max-w-xl", "text-left", "justify-center", "mx-auto")}>
          <h2
            className={cn(
              "mt-4",
              "font-serif",
              "text-2xl",
              "text-slate-900",
              "sm:text-3xl",
              "lg:text-4xl",
              "text-center",
              "lg:text-start"
            )}
          >
            Find Care Near You
            <br />
            in Seconds
          </h2>

          <p
            className={cn(
              "mt-3",
              "text-sm",
              "leading-relaxed",
              "text-slate-500",
              "text-center",
              "md:px-0",
              "lg:text-start",
              "md:text-center",
              "md:mx-auto"
            )}
          >
            Browse top-rated specialists in your city and book a confirmed slot in
            minutes — no waiting, no phone calls.
          </p>

          <div
            className={cn(
              "mt-4",
              "w-[35%]",
              "justify-between",
              "items-center",
              "flex",
              "mx-auto",
              "lg:items-start",
              "lg:mx-0"
            )}
          >
            <div className={cn("relative", "w-full", "flex", "items-center")}>
              <Search className={cn("absolute", "left-2.5", "h-4", "w-4", "text-slate-500")} />
              <Input
                placeholder="Search by Location"
                className={cn(
                  "w-full",
                  "h-10",
                  "pl-9",
                  "py-2",
                  "bg-white",
                  "!bg-white",
                  "border",
                  "border-main-blue",
                  "text-main-blue",
                  "placeholder:text-main-blue",
                  "md:text-xs"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cn("w-full", "lg:w-1/2", "flex", "justify-center", "items-center" ,'z-[-1]')}>
        {position && (
          <Map
            position={position}
            markerText="موقعك"
            doctors={nearbyDoctors}
          />
        )}
      </div>
    </section>
  );
}