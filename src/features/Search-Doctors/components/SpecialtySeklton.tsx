import { Skeleton } from "@/components/ui/skeleton";

export default function SpecialtiesSkeleton() {
    return (
        <div className="grid grid-cols-6 gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
            <div
            key={index}
            className="border border-slate-200/90 py-1.5 w-full flex items-center justify-center gap-1.5 rounded-xl px-1.5"
            >
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-md" />
            </div>
        ))}
        </div>
    );
}
