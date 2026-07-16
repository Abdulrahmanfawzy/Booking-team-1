import { useRef } from "react";
import { Star, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  rating: number;
  consultation_price: number;
  image: string | null;
}

interface Props {
  doctors: Doctor[];
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className={cn('min-w-[330px]', 'max-w-[230px]', 'shrink-0', 'snap-start', 'rounded-2xl', 'border', 'border-gray-200', 'bg-white', 'p-4', 'shadow-sm', 'transition-shadow', 'hover:shadow-md')}>
      {/* Doctor info row */}
      <div className={cn('flex', 'items-center', 'gap-3')}>
        <img
          src={`${doctor.image}`}
          alt={doctor.name}
          className={cn('h-20', 'w-20', 'shrink-0', 'rounded-xl', 'object-cover')}
        />
        <div className={cn('min-w-0', 'text-left')}>
          <p className={cn('truncate', 'font-semibold', 'text-gray-900')}>{doctor.name}</p>
          <p className={cn('truncate', 'text-sm', 'text-gray-500')}>
            {doctor.specialty} | {doctor.hospital}
          </p>

          {/* Rating & hours */}
          <div className={cn('mt-2', 'flex', 'items-center', 'gap-3', 'text-sm', 'text-gray-500')}>
            <span className={cn('flex', 'items-center', 'gap-1')}>
              <Star className={cn('h-4', 'w-4', 'fill-amber-400', 'text-amber-400')} />
              <span className={cn('font-medium', 'text-gray-800')}>{doctor.rating}</span>
            </span>
            <span className={cn('flex', 'items-center', 'gap-1')}>
              <Clock className={cn('h-4', 'w-4')} />
              Available Today
            </span>
          </div>
        </div>
      </div>

      {/* Price row */}
      <div className={cn('mt-3', 'flex', 'items-baseline', 'justify-between')}>
        <span className={cn('text-sm', 'text-gray-500')}>Price/hour</span>
        <span className={cn('text-base', 'font-semibold', 'text-red-500')}>
          ${doctor.consultation_price}
        </span>
      </div>

      {/* CTA button */}
      <div className="mt-2 w-full flex justify-center">
        <Link
          to={`/doctors/${doctor.id}`}
          className={cn('w-full', 'rounded-lg', 'bg-blue-800', 'py-2', 'text-sm', 'font-medium', 'text-white', 'transition-colors', 'hover:bg-blue-900', 'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-blue-800', 'focus-visible:ring-offset-2')}
        >
          Book appointment
        </Link>
      </div>
    </div>
  );
}

export default function TopRatedDoctors({ doctors = [] }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 /* gap-4 */ : 276;
    track.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={cn('mx-auto', 'max-w-full', 'px-4', 'py-12')}>
      {/* Header row */}
      <div className={cn('flex', 'flex-wrap', 'items-start', 'justify-between', 'text-left', 'ml-2')}>
        <div>
          <h2 className={cn('text-2xl', 'font-bold', 'text-gray-900', 'md:text-3xl')}>
            Top-Rated Doctors Chosen by Patients
          </h2>
          <p className={cn('mt-2', 'max-w-2xl', 'text-sm', 'text-gray-500', 'md:text-base', 'text-left', 'ml-2', 'mb-6')}>
            Explore our highest-rated doctors, trusted by real patients for
            their expertise, care, and service. Book with confidence today.
          </p>
        </div>

        {/* Controls */}
        <div className={cn('flex', 'shrink-0', 'items-center', 'gap-2', 'items-right', 'lg:mr-10')}>
          <Link to={'/doctors'}
            className={cn('rounded-lg', 'border', 'border-gray-200', 'px-4', 'py-2', 'text-sm', 'font-medium', 'text-blue-800', 'transition-colors', 'hover:bg-blue-50')}
          >
            View All
          </Link>

          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            aria-label="Previous doctors"
            className={cn('flex', 'h-9', 'w-9', 'items-center', 'justify-center', 'rounded-full', 'border', 'border-gray-200', 'text-gray-700', 'transition-colors', 'hover:bg-gray-100')}
          >
            <ArrowLeft className={cn('h-4', 'w-4')} />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("next")}
            aria-label="Next doctors"
            className={cn('flex', 'h-9', 'w-9', 'items-center', 'justify-center', 'rounded-full', 'border', 'border-gray-200', 'text-gray-700', 'transition-colors', 'hover:bg-gray-100')}
          >
            <ArrowRight className={cn('h-4', 'w-4')} />
          </button>
        </div>
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        className={cn('mt-6', 'flex', 'gap-4', 'overflow-x-auto', 'pb-2', 'snap-x', 'snap-mandatory', '[scrollbar-width:none]', '[-ms-overflow-style:none]', '[&::-webkit-scrollbar]:hidden')}
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} data-card>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </section>
  );
}