import { Link } from "react-router-dom";
import Facebook from "@/assets/facebook.svg";
import Whatsapp from "@/assets/whatsapp.svg";
import Youtube from "@/assets/Youtube.svg";
import Linkedin from "@/assets/Linkedin.svg";
import logo from "@/assets/Logowhite.svg";

const socialLinks = [
  { icon: Facebook, alt: "Facebook", href: "#" }, // TODO: update to real Facebook URL
  { icon: Whatsapp, alt: "WhatsApp", href: "#" }, // TODO: update to real WhatsApp URL
  { icon: Youtube, alt: "Youtube", href: "#" },   // TODO: update to real YouTube URL
  { icon: Linkedin, alt: "Linkedin", href: "#" },  // TODO: update to real LinkedIn URL
];

export default function FooterBrand() {
  return (
    <div className="text-center md:text-left">
      {/* Logo — links to home */}
      <Link
        to="/home"
        className="inline-flex items-center justify-center gap-3 md:justify-start"
      >
        <img src={logo} className="size-10" alt="" />
        <h2 className="text-xl text-white">Cure</h2>
      </Link>

      {/* Description */}
      <p className="mx-auto mt-2 max-w-[260px] text-xs leading-7 text-gray-300 md:mx-0">
        Cure helps you find trusted doctors, book appointments, and manage your
        health quickly and easily.
      </p>

      {/* Social Icons — external links stay as <a> since they open external URLs */}
      <div className="mt-4 flex justify-center gap-3 md:justify-start">
        {socialLinks.map(({ icon, alt, href }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition hover:scale-105"
          >
            <img src={icon} alt={alt} className="h-7 w-7" />
          </a>
        ))}
      </div>
    </div>
  );
}