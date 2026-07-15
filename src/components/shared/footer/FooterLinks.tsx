import { Link } from "react-router-dom";

// Map each label to its app route
const ROUTE_MAP: Record<string, string> = {
  Home: "/home",
  Doctors: "/search",
  FAQs: "#",            // TODO: update when /faq route is created
  "Contact Us": "/contact-us",
  "Help Center": "#",   // TODO: update when /help route is created
  "How it works": "/home",
  "Privacy Policy": "#", // TODO: update when /privacy route is created
  "Terms & Conditions": "#", // TODO: update when /terms route is created
};

interface Props {
  title: string;
  links: string[];
}

export default function FooterLinks({ title, links }: Props) {
  return (
    <div className="text-center md:text-left">
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>

      <ul className="space-y-1">
        {links.map((link) => {
          const to = ROUTE_MAP[link] ?? "#";
          return (
            <li key={link}>
              <Link
                to={to}
                className="text-sm text-gray-300 transition duration-200 hover:text-white"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}