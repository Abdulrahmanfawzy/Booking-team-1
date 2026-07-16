import { Skeleton } from "@/components/ui/skeleton";

export default function DoctorsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
            <div
            key={index}
            className="p-3 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.1)]"
            >
            <div className="flex gap-3 pb-2">
                {/* Doctor Image */}
                <Skeleton className="h-[70px] w-[70px] rounded-lg shrink-0 bg-gray-100" />

                <div className="flex-1">
                {/* Name */}
                <Skeleton className="h-5 w-32 mb-2 bg-gray-100" />

                {/* Address */}
                <Skeleton className="h-6 w-full bg-gray-100" />

                {/* Rating & Time */}
                <div className="flex items-center gap-3 mt-1">
                    <Skeleton className="h-4 w-14 bg-gray-100" />
                    <Skeleton className="h-4 w-24 bg-gray-100" />
                </div>
                </div>
            </div>

            <hr className="text-gray-200" />

            {/* Price */}
            <div className="flex justify-between items-center mb-2 mt-2">
                <Skeleton className="h-4 w-20 bg-gray-100" />
                <Skeleton className="h-5 w-12 bg-gray-100" />
            </div>

            {/* Button */}
            <Skeleton className="h-[42px] w-full rounded-md bg-gray-100" />
            </div>
        ))}
        </div>
    );
}
