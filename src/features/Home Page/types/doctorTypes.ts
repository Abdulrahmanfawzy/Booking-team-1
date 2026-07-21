export interface Doctor {
  id: number;
  name: string;
  image?: string | null;
  specialty?: string | {
    id: number;
    name: string;
  };
  hospital?: string;
  rating?: number;
  consultation_price?: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  location?: {
    address?: string;
    latitude: number;
    longitude: number;
  };
  distance_km?: number;
  opening_hours?: {
    sat?: { from: string; to: string }[];
    sun?: { from: string; to: string }[];
    mon?: { from: string; to: string }[];
    tue?: { from: string; to: string }[];
    wed?: { from: string; to: string }[];
    thu?: { from: string; to: string }[];
    fri?: { from: string; to: string }[];
  };
}