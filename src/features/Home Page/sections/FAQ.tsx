import { Star, Plus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

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
    <div className="mx-auto flex max-w-lg flex-col items-center text-center">
      <h2 className="font-serif text-3xl leading-tight text-slate-900">
        Reviews
        <br />
        That Speak for Themselves
      </h2>

      <div className="mt-5 flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} className="fill-amber-400" />
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-500">
        "Quick and easy booking! I found a great dermatologist near me and
        booked an appointment in just a few minutes."
      </p>

      <div className="mt-6 flex -space-x-3">
        {REVIEW_AVATARS.map((n) => (
          <img
            key={n}
            src={`https://i.pravatar.cc/80?img=${n}`}
            alt=""
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
          />
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  return (
    <div className="mx-auto mt-16 max-w-2xl">
      <div className="flex justify-center">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          Frequently Asked Questions
        </span>
      </div>
      <h3 className="mt-3 text-center font-serif text-2xl text-slate-900">
        Got Questions? We've got Answers!
      </h3>

      <Accordion.Root
        type="single"
        collapsible
        className="mt-8 flex flex-col gap-2.5"
      >
        {FAQ_ITEMS.map((item, i) => (
          <Accordion.Item
            key={item.q}
            value={`item-${i}`}
            className="overflow-hidden rounded-xl bg-slate-50"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                {item.q}
                <Plus
                  size={16}
                  className="shrink-0 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-45"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden px-4 text-sm leading-relaxed text-slate-500 data-[state=open]:pb-4">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-10">
      <Reviews />
      <FAQAccordion />
    </section>
  );
}
