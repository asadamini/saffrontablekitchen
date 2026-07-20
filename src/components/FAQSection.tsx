import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "../data/menuData";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 lg:gap-20">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B85C38] mb-4">FAQ</p>
            <h2 className="font-[Gloock] text-3xl md:text-4xl leading-[1.1] tracking-[-0.02em] text-[#2A1920]">
              Frequently asked questions
            </h2>
          </div>

          <div className="border-t border-[#3E2438]/8">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="border-b border-[#3E2438]/8">
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] focus-visible:ring-inset min-h-[56px]"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-[Gloock] text-[17px] leading-snug transition-colors ${isOpen ? "text-[#D89A27]" : "text-[#2A1920]"}`}>
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 mt-0.5 transition-colors ${isOpen ? "text-[#D89A27]" : "text-[#2A1920]/35"}`}>
                      {isOpen ? <Minus size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5">
                      <p className="text-[#6B5A50] text-[15px] leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
