import { Search, Calendar, CreditCard } from "lucide-react";
import StepVisual from "./StepVisual";

const STEPS = [
  {
    icon: Search,
    title: "Search for a Doctor",
    body: "Easily browse by specialty, location, or doctor name to find the right healthcare provider for your needs.",
  },
  {
    icon: Calendar,
    title: "Choose a Date & Time",
    body: "View real-time availability and pick a slot that works best for your schedule.",
  },
  {
    icon: CreditCard,
    title: "Book & Pay Online",
    body: "Confirm your appointment and pay securely using various payment options — credit card, mobile wallet.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-10">
      <h2 className="text-center font-serif text-3xl text-slate-900">
        How it works
      </h2>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-3 ">
        {STEPS.map((step, i) => (
          <div key={step.title} className="flex flex-col  gap-4 border p-2 border-gray-300 rounded-2xl">
            <StepVisual index={i}  />
            <div className=" ">
              <h3 className="text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
