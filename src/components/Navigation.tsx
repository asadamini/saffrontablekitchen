import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/menuData";

function Logo({ dark }: { dark?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] rounded-sm">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect width="30" height="30" rx="4" fill={dark ? "#D89A27" : "#3E2438"} />
        <path d="M7 15 Q15 9 23 15" stroke="#FBF7EF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M9 18 Q15 13 21 18" stroke="#FBF7EF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <ellipse cx="15" cy="20" rx="8" ry="2.5" stroke="#FBF7EF" strokeWidth="1.4" fill="none" opacity="0.55" />
      </svg>
      <div className="leading-none">
        <span className={`font-[Gloock] text-[17px] tracking-[-0.01em] ${dark ? "text-white" : "text-[#2A1920]"}`}>
          Saffron Table
        </span>
        <span className="block text-[9px] tracking-[0.22em] uppercase font-bold mt-0.5 text-[#D89A27]">
          Indian Kitchen
        </span>
      </div>
    </a>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = !scrolled;

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-[#3E2438]/10 shadow-sm" : "bg-[#3E2438]"
      }`}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] gap-6">
            <Logo dark={isDark} />

            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] rounded-sm ${
                    isDark ? "text-white/60 hover:text-white" : "text-[#2A1920]/55 hover:text-[#2A1920]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#quote"
                className={`inline-flex items-center px-5 py-2.5 text-[13px] font-bold tracking-wide uppercase transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] ${
                  isDark
                    ? "bg-[#D89A27] text-white hover:bg-[#C48A1F]"
                    : "bg-[#3E2438] text-white hover:bg-[#D89A27]"
                }`}
              >
                Order Catering
              </a>
            </div>

            <button
              className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] ${
                isDark ? "text-white" : "text-[#2A1920]"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#3E2438]" style={{ top: "60px" }}>
          <div className="p-6 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-white/70 text-xl font-medium border-b border-white/10 hover:text-[#D89A27] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <a href="#quote" onClick={() => setMobileOpen(false)} className="bg-[#D89A27] text-white text-center py-4 font-bold tracking-wider uppercase text-sm rounded-sm">Order Catering</a>
              <a href="#quote" onClick={() => setMobileOpen(false)} className="border border-white/25 text-white text-center py-4 font-bold tracking-wider uppercase text-sm rounded-sm">Request a Quote</a>
            </div>
          </div>
        </div>
      )}

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-px shadow-2xl">
        <a href="#quote" className="flex-1 bg-[#D89A27] text-white text-[12px] font-bold tracking-[0.15em] uppercase py-4 text-center min-h-[52px] flex items-center justify-center">
          Order Catering
        </a>
        <a href="#quote" className="flex-1 bg-[#3E2438] text-white text-[12px] font-bold tracking-[0.15em] uppercase py-4 text-center min-h-[52px] flex items-center justify-center">
          Request Quote
        </a>
      </div>
    </>
  );
}
