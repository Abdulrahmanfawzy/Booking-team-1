import { Link } from "react-router-dom";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="bg-[#071B39] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-2">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />

          <FooterLinks
            title="Company"
            links={["Home", "Doctors", "FAQs", "Contact Us"]}
          />

          <FooterLinks
            title="Support"
            links={[
              "Help Center",
              "How it works",
              "Privacy Policy",
              "Terms & Conditions",
            ]}
          />

          <FooterContact />
        </div>

        {/* Bottom */}
        <div className="mt-4 border-t border-white/10 pt-2">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-300 md:flex-row">
            <p>©2024 Techvio - All Right Reserved</p>

            <div className="flex items-center gap-2">
              {/* TODO: update to="/terms" when the Terms & Conditions route is created */}
              <Link
                to="#"
                className="transition hover:text-white"
              >
                Terms &amp; Conditions
              </Link>

              <span>|</span>

              {/* TODO: update to="/privacy" when the Privacy Policy route is created */}
              <Link
                to="#"
                className="text-xs transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}