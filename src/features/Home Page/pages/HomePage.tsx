 import Hero from "@/features/Home Page/sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import FindCare from "../sections/FindCare";
import FAQ from '../sections/FAQ'
import DownloadAppCard from '../sections/DownloadApp'
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Hero />
      <HowItWorks/>
      <FindCare />
      <FAQ/>
      <DownloadAppCard/>
    </div>
  );
}
