import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { COUNTRIES } from "../constants/countries";
import type { Country } from "../types/auth.types";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  placeholder?: string;
  error?: boolean;
}

export function PhoneInput({
  countryCode,
  phone,
  onCountryChange,
  onPhoneChange,
  placeholder,
  error,
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedCountry: Country =
    COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-14 w-full items-center gap-3 rounded-[12px] border pl-4 pr-6 transition-all focus-within:border-[#145DB8]",
        error ? "border-red-500" : "border-[#99A2AB]/40",
      )}
    >
      {/* Top country selector button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer h-full"
      >
        {/* Current selected country flag image next to the arrow */}
        <img
          src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
          alt={selectedCountry.name}
          className="w-7 h-5 object-cover rounded-[4px] shadow-sm"
        />
        <ChevronDown
          className={cn(
            "h-4 w-4 text-[#404448] transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* Gray vertical divider */}
      <span className="text-base text-neutral-200 select-none">|</span>

      {/* Phone number input field */}
      <input
        type="tel"
        inputMode="numeric"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value.replace(/\D/g, ""))}
        placeholder={placeholder ?? `${selectedCountry.dialCode} 000 000 000`}
        className="h-full w-full font-sans text-base text-[#05162C] placeholder:text-[#99A2AB]/60 focus:outline-none"
      />

      {/* Dropdown Menu: Flags, country names, and dial codes side by side */}
      {isOpen && (
        <ul className="absolute left-0 top-[calc(100%+6px)] z-50 w-[200px] max-h-[240px] overflow-y-auto rounded-[12px] border border-[#E2E8F0] bg-white p-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          {COUNTRIES.map((country) => (
            <li key={country.code}>
              <button
                type="button"
                onClick={() => {
                  onCountryChange(country.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-[8px] px-3 py-2.5 text-left font-sans text-sm text-[#05162C] transition-colors hover:bg-neutral-50",
                  country.code === countryCode && "bg-blue-50/60 text-[#145DB8] font-medium"
                )}
              >
                {/* Country flag image next to the name inside the list */}
                <img
                  src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-6 h-4 object-cover rounded-[2px] shadow-sm shrink-0"
                />
                <span className="truncate flex-1">{country.name}</span>
                
        
                <span className="text-xs text-neutral-400 font-normal shrink-0">
                  {country.dialCode}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}