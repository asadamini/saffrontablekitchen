import { officeCateringFeatures } from "../data/menuData";
import { imgOfficeBusy } from "../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export default function OfficeCateringCallout() {
  return (
    <section className="bg-white border-y border-[#3E2438]/6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Real office buffet photo */}
          <div className="order-2 lg:order-1 relative overflow-hidden min-h-[340px]">
            <ImageWithFallback
              src={imgOfficeBusy}
              alt="Office team serving themselves from Indian catering buffet with curries, rice, naan, and salads"
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Gold corner accent */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#D89A27]/60 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 px-8 py-16 md:px-12 md:py-20 lg:px-14">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B85C38] mb-4">
              Office Catering
            </p>
            <h2 className="font-[Gloock] text-3xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-[#2A1920] mb-5">
              Complete Indian meals built for workplace ordering
            </h2>
            <p className="text-[#6B5A50] text-base leading-relaxed mb-8">
              From individually packaged lunch boxes to complete buffet-style catering trays, Saffron Table makes Indian catering easy for meetings, trainings, client lunches, and team events.
            </p>

            <div className="grid grid-cols-1 gap-2.5 mb-8">
              {officeCateringFeatures.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#D89A27] rounded-full flex-shrink-0" />
                  <span className="text-[#2A1920]/70 text-sm">{feat}</span>
                </div>
              ))}
            </div>

            <a
              href="#quote"
              className="inline-flex items-center gap-2.5 bg-[#3E2438] text-white px-7 py-3.5 text-[13px] font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#D89A27] transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27]"
            >
              Request a Catering Quote
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
