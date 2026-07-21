import { cn } from "@/lib/utils";
import Map from "@/components/shared/Map";
import { useDoctors } from "../hooks/useDoctors";
import { useState } from "react";
import SearchCombobox from "@/components/shared/SearchInpotHome";
import type { Doctor } from "@/features/Home Page/types/doctorTypes";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  position: [number, number] | null;
  nearbyDoctors: Doctor[];
}

export default function FindCare({ position, nearbyDoctors = [] }: Props) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [doctorFromSearchLocation, setDoctorFromSearchLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // Pass debouncedQuery instead of query to prevent API requests on every single keystroke.
  const { data, isLoading } = useDoctors({
    keyword: debouncedQuery,
    latitude: position?.[0] || 30.0444,
    longitude: position?.[1] || 31.2357,
    page: 1,
  });

  // If query is empty, fall back to initial nearbyDoctors passed via props
  const searchResults =
    debouncedQuery.trim() === "" ? nearbyDoctors : data?.data?.doctors ?? [];

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
      {/* Left Column: Text & Search */}
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

          <div className={cn("w-full", "mx-auto", "text-center", "mt-6")}>
            <SearchCombobox
              items={searchResults}
              query={query}
              setQuery={setQuery}
              value={selectedDoctor}
              onChange={(val) => {
                setSelectedDoctor(val);
                if (val && typeof val.latitude === "number" && typeof val.longitude === "number") {
                  setDoctorFromSearchLocation({
                    latitude: val.latitude,
                    longitude: val.longitude,
                  });
                } else {
                  setDoctorFromSearchLocation(null);
                }
              }}
              placeholder="Search for a doctor"
              isLoading={debouncedQuery !== query || isLoading}
              className={cn("max-w-xl", "mx-auto", "lg:mx-0", "text-left")}
              getKey={(doctor) => doctor.id}
              getValue={(doctor) => doctor}
              renderValue={(doctor) => (
                <div className={cn("flex", "items-baseline", "gap-2", "w-full", "overflow-hidden")}>
                  <span className={cn("font-semibold", "text-slate-800", "text-sm", "md:text-base", "shrink-0")}>
                    {doctor.name}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      "md:text-sm",
                      "text-slate-400",
                      "font-normal",
                      "truncate",
                      "flex-1"
                    )}
                  >
                    {doctor.address || (typeof doctor.specialty === "string" ? doctor.specialty : doctor.specialty?.name) || ""}
                  </span>
                </div>
              )}
              renderItem={(doctor) => (
                <div className={cn("flex", "items-center", "gap-3", "py-0.5", "w-full")}>
                  <img
                    src={doctor.image || "https://avatar.iran.liara.run/public/doctor"}
                    alt={doctor.name}
                    className={cn(
                      "w-10",
                      "h-10",
                      "rounded-full",
                      "object-cover",
                      "border",
                      "border-slate-100",
                      "bg-slate-50",
                      "shrink-0"
                    )}
                  />
                  <div className={cn("min-w-0", "flex-1")}>
                    <p className={cn("font-medium", "text-slate-800", "text-sm", "md:text-base", "truncate")}>
                      {doctor.name}
                    </p>
                    <p className={cn("text-xs", "md:text-sm", "text-slate-400", "truncate")}>
                      {doctor.address || (typeof doctor.specialty === "string" ? doctor.specialty : doctor.specialty?.name) || ""}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* Right Column: Map */}
      <div className={cn("w-full", "lg:w-1/2", "flex", "justify-center", "items-center", "lg:h-[400px]")}>
        {position && (
          <Map
            position={position}
            markerText="Your Location"
            doctors={searchResults}
            selectedDoctor={selectedDoctor}
            doctorFromSearchLocation={doctorFromSearchLocation}
          />
        )}
      </div>
    </section>
  );
}