import { footerLinks } from "../data/menuData";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2A1920] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-20">
        <div className="border-b border-white/8 pb-10 mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <rect width="30" height="30" rx="4" fill="#D89A27" />
                <path d="M7 15 Q15 9 23 15" stroke="#FBF7EF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <ellipse cx="15" cy="20" rx="8" ry="2.5" stroke="#FBF7EF" strokeWidth="1.4" fill="none" opacity="0.6" />
              </svg>
              <span className="font-[Gloock] text-[18px] text-white tracking-[-0.01em]">Saffron Table</span>
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#D89A27] self-end pb-0.5">Indian Kitchen</span>
            </div>
            <p className="text-white/35 text-sm max-w-xs leading-relaxed">
              Complete Indian meals and catering for office lunches, meetings, and team events.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#D89A27] text-white px-7 py-3.5 text-[12px] font-bold tracking-[0.18em] uppercase rounded-sm hover:bg-[#C48A1F] transition-colors min-h-[48px] self-start lg:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A1920]"
          >
            Order Catering
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Menu</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/45 text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Order</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/45 text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/45">
              <li><a href="mailto:saffrontableindkitchen@gmail.com" className="hover:text-white transition-colors">saffrontableindkitchen@gmail.com</a></li>
              <li><a href="tel:9255676712" className="hover:text-white transition-colors">(925) 567-6712</a></li>
              <li>San Francisco Bay Area</li>
            </ul>
          </div>
          <div>
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mb-4">Follow</p>
            <div className="flex gap-2.5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-white/8 flex items-center justify-center hover:bg-[#D89A27] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27]"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[11px]">© 2026 Saffron Table Indian Kitchen. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Accessibility"].map((link) => (
              <a key={link} href="#" className="text-white/25 text-[11px] hover:text-white/50 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
