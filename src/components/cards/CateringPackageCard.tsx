import type { CateringPackage } from "../../data/menuData";
import {
  imgNewTrayBuffet,
  imgNewMeatSpread,
  imgNewVegTrays,
  imgNewBiryaniTrays,
  imgCateringGold,
} from "../../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ImagePlaceholder, Badge } from "../shared";
import { Check } from "lucide-react";

const packageImages: Record<string, string> = {
  "classic-buffet": imgNewTrayBuffet,
  "grill-curry-buffet": imgNewMeatSpread,
  "vegetarian-buffet": imgNewVegTrays,
  "biryani-feast": imgNewBiryaniTrays,
  "full-meal-package": imgCateringGold,
};

export default function CateringPackageCard({ pkg }: { pkg: CateringPackage }) {
  const isFeatured = pkg.badge === "MOST POPULAR" || pkg.badge === "BEST VALUE";
  const image = packageImages[pkg.id];

  return (
    <div className={`rounded-sm overflow-hidden flex flex-col transition-all duration-200 ${
      isFeatured ? "bg-white ring-1 ring-[#D89A27] shadow-lg" : "bg-white/8 border border-white/12 hover:border-white/22"
    }`}>
      <div className="relative">
        {image ? (
          <div className="aspect-[4/3] overflow-hidden bg-[#DDD5C8]">
            <ImageWithFallback src={image} alt={pkg.imageAlt} className="h-full w-full object-cover" />
          </div>
        ) : (
          <ImagePlaceholder filename={pkg.imageSrc} alt={pkg.imageAlt} aspectRatio="4/3" className="rounded-none w-full" />
        )}
        {pkg.badge && <div className="absolute top-3 left-3"><Badge label={pkg.badge} /></div>}
      </div>
      <div className={`p-5 flex-1 flex flex-col ${isFeatured ? "text-[#2A1920]" : "text-white"}`}>
        <h3 className={`font-[Gloock] text-xl mb-2 leading-snug ${isFeatured ? "text-[#2A1920]" : "text-white"}`}>
          {pkg.name}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${isFeatured ? "text-[#6B5A50]" : "text-white/55"}`}>
          {pkg.description}
        </p>
        <div className="flex-1 mb-4">
          <p className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-2 ${isFeatured ? "text-[#2A1920]/35" : "text-white/30"}`}>Includes</p>
          <div className="grid grid-cols-1 gap-1.5">
            {pkg.includes.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={11} className="text-[#D89A27] flex-shrink-0" strokeWidth={2.5} />
                <span className={`text-[13px] ${isFeatured ? "text-[#2A1920]/75" : "text-white/65"}`}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`grid grid-cols-4 gap-1 mb-4 p-3 rounded-sm ${isFeatured ? "bg-[#FBF7EF]" : "bg-white/8"}`}>
          {pkg.pricing.map((p) => (
            <div key={p.serves} className="text-center">
              <p className={`text-[9px] font-bold uppercase tracking-wider ${isFeatured ? "text-[#6B5A50]" : "text-white/40"}`}>{p.serves}</p>
              <p className={`font-semibold text-sm ${isFeatured ? "text-[#2A1920]" : "text-white"}`}>{p.price}</p>
            </div>
          ))}
        </div>
        <p className="text-[#D89A27] font-semibold text-sm mb-4">{pkg.startingPrice}</p>
        <a
          href="#quote"
          className={`w-full py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-center transition-colors duration-200 min-h-[44px] flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] ${
            isFeatured ? "bg-[#3E2438] text-white hover:bg-[#D89A27]" : "bg-white/12 text-white hover:bg-white/22"
          }`}
        >
          Request Quote
        </a>
      </div>
    </div>
  );
}
