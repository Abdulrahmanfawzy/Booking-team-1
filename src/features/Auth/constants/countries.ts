
import type { Country } from "../types/auth.types";

export const COUNTRIES: Country[] = [
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "JO", name: "Jordan", dialCode: "+962" },
  { code: "LB", name: "Lebanon", dialCode: "+961" },
  { code: "IQ", name: "Iraq", dialCode: "+964" },
  { code: "SY", name: "Syria", dialCode: "+963" },
  { code: "MA", name: "Morocco", dialCode: "+212" },
  { code: "DZ", name: "Algeria", dialCode: "+213" },
  { code: "TN", name: "Tunisia", dialCode: "+216" },
  { code: "LY", name: "Libya", dialCode: "+218" },
  { code: "SD", name: "Sudan", dialCode: "+249" },
  { code: "PS", name: "Palestine", dialCode: "+970" },
  { code: "YE", name: "Yemen", dialCode: "+967" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
];

export const DEFAULT_COUNTRY = COUNTRIES[0];