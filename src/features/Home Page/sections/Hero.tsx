import {
    MapPin,
    Calendar,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";
const DOCTORS = [
    { id: 1, name: "Dr. Amina Farouk", specialty: "Orthopedic", clinic: "El-Nasr Hospital", rating: 4.8, hours: "9:30am – 8:00pm", price: 350, img: "https://i.pravatar.cc/160?img=47" },
    { id: 2, name: "Dr. Karim Adel", specialty: "Dermatology", clinic: "El-Nasr Hospital", rating: 4.9, hours: "10:00am – 6:00pm", price: 300, img: "https://i.pravatar.cc/160?img=13" },
    { id: 3, name: "Dr. Salma Nabil", specialty: "Cardiology", clinic: "El-Nasr Hospital", rating: 4.7, hours: "8:00am – 4:00pm", price: 400, img: "https://i.pravatar.cc/160?img=32" },
    { id: 4, name: "Dr. Youssef Hany", specialty: "Pediatrics", clinic: "El-Nasr Hospital", rating: 4.8, hours: "9:00am – 5:00pm", price: 280, img: "https://i.pravatar.cc/160?img=52" },
];

const FAQ_ITEMS = [
    { q: "What is this app used for?", a: "It helps you search for doctors and clinics near you, compare ratings and prices, and book a confirmed appointment in a few taps — no phone calls needed." },
    { q: "Is the app free to use?", a: "Yes. Browsing doctors, comparing availability, and booking is completely free. You only pay the consultation fee shown on each doctor's profile." },
    { q: "How do I book an appointment?", a: "Search by specialty or location, pick a doctor, choose an open date and time, then confirm with your preferred payment method." },
    { q: "Can I reschedule or cancel a visit?", a: "Yes, you can reschedule or cancel from your appointments page up to a few hours before the visit, free of charge." },
];

const REVIEW_AVATARS = [11, 22, 5, 15, 8];
export default function Hero() {
    return (
        <div>
            <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-10">
                {/* decorative backdrop */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100 sm:h-[640px] sm:w-[640px]"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100 sm:h-[440px] sm:w-[440px]"
                />

                <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                    <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        <Sparkles size={12} /> Upgrade your account
                    </span>

                    <h1 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                        Find and book top
                    </h1>

                    <p className="mt-5 max-w-lg text-sm text-slate-500 sm:text-base">
                        Easily find top-rated specialists near you and book appointments in just a few clicks.
                        Whether you need an in-person visit or a consultation, we're here to connect you with the
                        right care — fast, simple, and secure.
                    </p>

                    <div className="mt-6 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-1.5 shadow-sm">
                        <div className="flex -space-x-2.5">
                            {REVIEW_AVATARS.slice(0, 3).map((n) => (
                                <img
                                    key={n}
                                    src={`https://i.pravatar.cc/64?img=${n}`}
                                    alt=""
                                    className="h-6 w-6 rounded-full ring-2 ring-white"
                                />
                            ))}
                        </div>
                        <span className="text-xs font-medium text-slate-600">10k+ happy patients</span>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Get started
                        </button>
                        <button className="flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-blue-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            <Calendar size={16} /> Book Appointment
                        </button>
                    </div>
                </div>

                {/* floating badge: doctors near you */}
                <div className="absolute -left-1 top-15 hidden -translate-y-1/2 -rotate-18 items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-sm md:flex lg:left-16">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                        <MapPin size={14} />
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                        Doctors near you
                    </span>
                </div>

                {/* floating "book now" tag */}
                <div className="absolute bottom-6 right-6 hidden rotate-12 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium italic text-slate-600 shadow-sm md:flex lg:right-20">
                    <ArrowUpRight size={14} className="-rotate-45 text-blue-600" />
                    Book Now
                </div>
            </section>
        </div>
    )
}
