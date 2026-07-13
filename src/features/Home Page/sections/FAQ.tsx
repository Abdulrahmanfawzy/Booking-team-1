import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const REVIEW_AVATARS = [11, 22, 5, 15, 8];

const FAQ_ITEMS = [
  {
    q: "What is this app used for?",
    a: "It helps you search for doctors and clinics near you, compare ratings and prices, and book a confirmed appointment in a few taps — no phone calls needed.",
  },
  {
    q: "Is the app free to use?",
    a: "Yes. Browsing doctors, comparing availability, and booking is completely free. You only pay the consultation fee shown on each doctor's profile.",
  },
  {
    q: "How do I book an appointment?",
    a: "Search by specialty or location, pick a doctor, choose an open date and time, then confirm with your preferred payment method.",
  },
  {
    q: "Can I reschedule or cancel a visit?",
    a: "Yes, you can reschedule or cancel from your appointments page up to a few hours before the visit, free of charge.",
  },
];

function Reviews() {
  return (
    <div className={cn('mx-auto', 'flex', 'max-w-lg', 'flex-col', 'items-center', 'text-center')}>
      <h2 className={cn('font-serif', 'text-3xl', 'leading-tight', 'text-slate-900')}>
        Reviews
        <br />
        That Speak for Themselves
      </h2>

      <div className={cn('mt-5', 'flex', 'gap-1', 'text-amber-400')}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} className="fill-amber-400" />
        ))}
      </div>

      <p className={cn('mt-4', 'text-sm', 'leading-relaxed', 'text-slate-500')}>
        "Quick and easy booking! I found a great dermatologist near me and
        booked an appointment in just a few minutes."
      </p>

      <div className={cn('mt-6', 'flex', '-space-x-3')}>
        {REVIEW_AVATARS.map((n) => (
          <img
            key={n}
            src={`https://i.pravatar.cc/80?img=${n}`}
            alt="Reviewer"
            className={cn('h-11', 'w-11', 'rounded-full', 'object-cover', 'ring-2', 'ring-white')}
          />
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  return (
    <div className={cn('mx-auto', 'mt-16', 'max-w-2xl')}>
      <div className={cn('flex', 'justify-center')}>
        <span className={cn('rounded-full', 'bg-blue-50', 'px-3', 'py-1', 'text-xs', 'font-medium', 'text-blue-600')}>
          Frequently Asked Questions
        </span>
      </div>

      <h3 className={cn('mt-3', 'text-center', 'font-serif', 'text-2xl', 'text-slate-900')}>
        Got Questions? We've got Answers!
      </h3>

      <Accordion
        type="single"
        collapsible
        className={cn(
          "mt-8",
          "space-y-3",
          "w-full",
          "max-w-2xl",
          "mx-auto"
          )}
      >
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={item.q}
            value={`item-${index}`}
            className={cn(
              "w-full",
              "rounded-xl",
              "border",
              "border-slate-200",
              "bg-slate-50",
              "px-5"
            )}
          >
            <AccordionTrigger
              className={cn(
              "w-full",
              "text-left",
              "font-medium",
              "text-slate-900",
              "hover:no-underline"
              )}
            >
              {item.q}
            </AccordionTrigger>

            <AccordionContent className={cn('pb-4', 'text-sm', 'leading-relaxed', 'text-slate-500')}>
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={cn('w-full', 'px-4', 'pb-24', 'sm:px-6', 'lg:px-10')}>
      <Reviews />
      <FAQAccordion />
    </section>
  );
}