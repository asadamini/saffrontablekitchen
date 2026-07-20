import type { BiryaniItem } from "../../data/menuData";
import { Badge } from "../shared";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function BiryaniCard({ item, image }: { item: BiryaniItem; image?: string }) {
  return (
    <div className="bg-white rounded-sm border border-[#3E2438]/6 hover:border-[#D89A27]/30 transition-colors duration-200 p-5 flex items-start gap-4">
      <div className="flex-shrink-0 w-14 h-14 rounded-sm overflow-hidden bg-[#EDE5D8]">
        {image ? (
          <ImageWithFallback src={image} alt={item.imageAlt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[7px] text-[#8A7A68] font-mono text-center leading-tight px-1 break-all">
              {item.imageSrc.replace(".jpg", "")}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-[Gloock] text-[#2A1920] text-base leading-snug">{item.name}</h4>
            {item.badge && <Badge label={item.badge} />}
          </div>
          <span className="text-[#D89A27] font-bold text-sm flex-shrink-0 tabular-nums">{item.price}</span>
        </div>
        <p className="text-[#6B5A50] text-[13px] leading-relaxed mb-2">{item.description}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5">
          {item.includes.map((inc) => <span key={inc} className="text-[12px] text-[#6B5A50]">· {inc}</span>)}
        </div>
      </div>
    </div>
  );
}
