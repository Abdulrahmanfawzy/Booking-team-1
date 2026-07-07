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
        <img src={logo} alt="" />
        <h2 className="text-3xl text-white">
          Cure
        </h2>
      </div>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-[260px] text-sm leading-7 text-gray-300 md:mx-0">
        Cure helps you find trusted doctors,
        book appointments, and manage your
        health quickly and easily.
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-3 md:justify-start">
        {socialLinks.map(({ icon, alt, href }) => (
          <a
            key={alt}
            href={href}
            className="flex h-12 w-12 items-center justify-center rounded-md bg-white transition hover:scale-105"
          >
            <img
              src={icon}
              alt={alt}
              className="h-10 w-10 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}