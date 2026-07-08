import { Phone, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Phone",
    value: "+20 100 123 4567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@cure.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "129 El-Nasr Street, Cairo, Egypt",
  },
];

export default function FooterContact() {
  return (
    <div className="text-center md:text-left">
      <h3 className="mb-4 text-xl font-semibold text-white">
        Contact
      </h3>

      <div className="space-y-3">
        {contacts.map(({ icon: Icon, title, value }) => (
          <div
            key={title}
            className="flex items-start justify-center gap-2 md:justify-start"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Icon
                size={20}
                strokeWidth={1.7}
                className="text-white"
              />
            </div>

            <div>
              <p className="text-xs text-gray-400">
                {title}
              </p>

              <p className="mt-1 text-xs leading-6 text-white">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}