export type TDoctor = {
    id: number;
    name: string;
    image: string | undefined;
    specialty: {
        id: number;
        name: string;
    };
    rating: number;
    consultation_price: number;
    address: string;
    latitude: number;
    longitude: number;
    location: {
        address: string;
        latitude: number;
        longitude: number;
    };
    distance_km: number;
    opening_hours: {
        sat?: { from: string; to: string }[];
        sun?: { from: string; to: string }[];
        mon?: { from: string; to: string }[];
        tue?: { from: string; to: string }[];
        wed?: { from: string; to: string }[];
        thu?: { from: string; to: string }[];
        fri?: { from: string; to: string }[];
    };
};
