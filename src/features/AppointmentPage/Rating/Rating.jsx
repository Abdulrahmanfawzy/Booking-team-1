import { Pencil } from "lucide-react";
import StarsRating from "./StarsRating";
import HumanRatingCard from "./HumanRatingCard";

export default function Rating() {
  return (
    <div className="flex flex-col gap-7 mt-5">
      <header className="flex flex-row justify-between items-center">
        <h3>Reviews and Ratings</h3>
        <div className="flex flex-row items-center gap-2 text-main-blue cursor-pointer">
          <Pencil />
          <p>add review</p>
        </div>
      </header>
      {/* info about ratings */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">4.5/5</h1>
        <div>
          <StarsRating rating={4.5} />
          <p className="text-gray">1250+ Reviews</p>
        </div>
      </div>

      {/* Human Ratings */}
      <div className="grid grid-cols-2 gap-4">
        <HumanRatingCard />
        <HumanRatingCard />
      </div>
    </div>
  );
}
