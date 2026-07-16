import { useState, useEffect } from "react";
import Hero from "@/features/Home Page/sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import FindCare from "../sections/FindCare";
import FAQ from "../sections/FAQ";
import DownloadAppCard from "../sections/DownloadApp";
import TopRatedDoctors from "@/features/Home Page/sections/Doctors";
import { getHomeData } from "@/features/Home Page/Services/homeApi";

export default function HomePage() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [homeData, setHomeData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Step 1: Get the user's geolocation once on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError("Unable to retrieve your location.");
      }
    );
  }, []);

  // Step 2: Once we have a position, fetch home data
  useEffect(() => {
    if (!position) return;

    const fetchHome = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getHomeData(position[0], position[1]);
        setHomeData(response.data);
      } catch (err) {
        console.error("Failed to fetch home data:", err);
        setError("Failed to load home data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, [position]);

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Hero />
      <HowItWorks />

      <FindCare
        position={position}
        nearbyDoctors={homeData?.data?.nearby_doctors || []}
      />

      <TopRatedDoctors
        doctors={homeData?.data?.top_rated_doctors || []}
      />

      <FAQ />
      <DownloadAppCard />
    </div>
  );
}
