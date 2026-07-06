import type { Country } from "../types/auth.types";


export const COUNTRIES: Country[] = [
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
];

export const DEFAULT_COUNTRY = COUNTRIES[0];