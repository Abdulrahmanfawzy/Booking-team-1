import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSearchData } from "@/features/Home Page/hooks/useSearchData";
import SearchInpotHome from "../SearchInpotHome";
import type { Doctor } from "@/features/Home Page/types/doctorTypes";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const { data, isLoading } = useSearchData(debouncedQuery);
  const doctors = data?.data?.data?.doctors ?? [];

  return (
    <div className="w-full">
      <div className={cn('relative', 'w-full', 'max-w-xl',"mt-2")}>
        <SearchInpotHome
          items={doctors}
          query={query}
          setQuery={setQuery}
          value={selectedDoctor}
          onChange={setSelectedDoctor}
          placeholder="Search for a doctor"
          isLoading={debouncedQuery !== query || isLoading}
          getKey={(doctor: Doctor) => doctor.id}
          getValue={(doctor: Doctor) => doctor}
          renderValue={(doctor: Doctor) => (
            <div className={cn('flex', 'items-baseline', 'gap-2', 'w-full', 'overflow-hidden', 'text-ellipsis', 'whitespace-nowrap')}>
              <span className={cn('font-semibold', 'text-slate-800', 'text-sm')}>
                {doctor.name}
              </span>
              <span className={cn('text-xs', 'text-slate-400', 'font-normal', 'truncate', 'flex-1')}>
                {doctor.address || (typeof doctor.specialty === 'string' ? doctor.specialty : doctor.specialty?.name) || ""}
              </span>
            </div>
          )}
          renderItem={(doctor: Doctor) => (
            <div className={cn('flex', 'items-center', 'gap-3', 'py-0.5', 'w-full')}>
              <img
                src={doctor.image || "https://avatar.iran.liara.run/public/doctor"}
                alt={doctor.name}
                className={cn('w-10', 'h-10', 'rounded-full', 'object-cover', 'border', 'border-slate-100', 'bg-slate-50', 'shrink-0')}
              />
              <div className={cn('min-w-0', 'flex-1')}>
                <p className={cn('font-medium', 'text-slate-800', 'text-sm', 'truncate')}>
                  {doctor.name}
                </p>
                <p className={cn('text-xs', 'text-slate-400', 'truncate')}>
                  {(typeof doctor.specialty === 'string' ? doctor.specialty : doctor.specialty?.name) || ""}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}