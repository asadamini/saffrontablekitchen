import { cateringPackages, cateringAddOns } from "../data/menuData";
import { imgCateringGold } from "../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import CateringPackageCard from "./cards/CateringPackageCard";

export default function CateringSection() {
  return (
    <section id="catering" className="bg-[#3E2438]">
      {/* Full-width photo banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithFallback
          src={imgCateringGold}
          alt="Indian catering spread with gold chafing dishes containing paneer, dal, biryani, rice, tandoori chicken, and samosas"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2438]/30 via-[#3E2438]/20 to-[#3E2438]" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#D89A27] mb-3">Tray Catering</p>
          <h2 className="font-[Gloock] text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] text-white">
            Indian catering packages for teams of 10 to 100+
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/45 text-[15px] leading-relaxed mb-12 max-w-2xl">
            Complete buffet packages — butter chicken, tandoori, lamb, paneer, dal, biryani, rice, naan, samosas, chutneys, and desserts.
          </p>

          {/* Package cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
            {cateringPackages.map((pkg) => (
              <CateringPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Add-ons */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/30">
                Catering Add-Ons
              </p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-sm overflow-hidden border border-white/8">
              {cateringAddOns.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-center justify-between px-5 py-3.5 bg-[#3E2438] hover:bg-white/5 transition-colors"
                >
                  <div>
                    <p className="text-white/80 text-[13px] font-medium">{addon.name}</p>
                    <p className="text-white/30 text-[11px]">{addon.unit}</p>
                  </div>
                  <span className="text-[#D89A27] font-bold text-sm tabular-nums">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
