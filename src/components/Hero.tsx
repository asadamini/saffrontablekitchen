import { ArrowRight } from "lucide-react";
import { heroTrustPoints } from "../data/menuData";
import { imgTrayCatering } from "../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function Hero() {
  return (
    <section className="bg-[#3E2438] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-0 lg:gap-10 pt-12 md:pt-16 lg:pt-20 lg:items-stretch">

          {/* Text */}
          <div className="pb-12 lg:pb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#D89A27]" />
              <span className="text-[10px] text-[#D89A27] font-bold tracking-[0.3em] uppercase">
                Indian Office Catering
              </span>
            </div>

            <h1 className="font-[Gloock] text-[44px] sm:text-[56px] md:text-[66px] lg:text-[70px] leading-[1.03] tracking-[-0.025em] text-white mb-6">
              Fresh Indian<br />
              <em className="not-italic text-[#D89A27]">meals</em> made<br />
              for office teams.
            </h1>

            <p className="text-white/50 text-base md:text-[17px] leading-relaxed mb-10 max-w-md">
              Complete lunch boxes — butter chicken, tandoori, lamb rogan josh, paneer, dal, basmati, naan, biryani, samosas, desserts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#D89A27] text-white px-7 py-3.5 text-sm font-bold tracking-wide uppercase rounded-sm hover:bg-[#C48A1F] transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3E2438]"
              >
                Order Catering <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-white border border-white/20 px-7 py-3.5 text-sm font-semibold tracking-wide rounded-sm hover:bg-white/8 transition-colors min-h-[48px]"
              >
                View Menu
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {heroTrustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D89A27] flex-shrink-0" />
                  <span className="text-white/45 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real food image */}
          <div className="hidden lg:flex items-stretch self-stretch">
            <div className="w-full relative flex">
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#D89A27]/35 pointer-events-none z-10" />
              <ImageWithFallback
                src={imgTrayCatering}
                alt="Indian catering tray spread for office teams"
                className="w-full h-full min-h-[420px] object-cover object-center rounded-sm rounded-b-none"
              />
            </div>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="lg:hidden">
          <ImageWithFallback
            src={imgTrayCatering}
            alt="Indian catering tray spread for office teams"
            className="w-full aspect-[4/3] object-cover object-center rounded-sm rounded-b-none"
          />
        </div>
      </div>
    </section>
  );
}
