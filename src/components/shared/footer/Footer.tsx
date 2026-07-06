import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="bg-[#071B39] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-5">
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

        <div className="mt-8 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-300 md:flex-row">
            <p>©2024 Techvio - All Right Reserved</p>

            <div className="flex items-center gap-2">
              <button className="hover:text-white transition">
                Terms & Conditions
              </button>

              <span>|</span>

              <button className="hover:text-white transition">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}