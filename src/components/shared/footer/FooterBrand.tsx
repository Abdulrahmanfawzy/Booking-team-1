import Facebook from "@/assets/facebook.svg"
import Whatsapp from "@/assets/whatsapp.svg"
import Youtube from "@/assets/youtube.svg"
import Linkedin from "@/assets/Linkedin.svg"
import logo from "@/assets/Logowhite.svg"

const socialLinks = [
  { icon: Facebook, alt: "Facebook", href: "#" },
  { icon: Whatsapp, alt: "WhatsApp", href: "#" },
  { icon: Youtube, alt: "Youtube", href: "#" },
  { icon: Linkedin, alt: "Linkedin", href: "#" },
];

export default function FooterBrand() {
  return (
    <div className="text-center md:text-left">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <img src={logo} className="size-10" alt="" />
        <h2 className="text-xl text-white">
          Cure
        </h2>
      </div>

      {/* Description */}
      <p className="mx-auto mt-2 max-w-[260px] text-xs leading-7 text-gray-300 md:mx-0">
        Cure helps you find trusted doctors,
        book appointments, and manage your
        health quickly and easily.
      </p>

      {/* Social Icons */}
      <div className="mt-4 flex justify-center gap-3 md:justify-start">
        {socialLinks.map(({ icon, alt, href }) => (
          <a
            key={alt}
            href={href}
            className="flex items-center justify-center transition hover:scale-105"
          >
            <img
              src={icon}
              alt={alt}
              className="h-7 w-7"
            />
          </a>
        ))}
      </div>
    </div>
  );
}