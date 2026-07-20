import type { MenuItem } from "../../data/menuData";
import { Badge } from "../shared";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function MenuCard({ item, image }: { item: MenuItem; image?: string }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-[#3E2438]/8 last:border-b-0">
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
        <div className="flex items-start justify-between gap-3 mb-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-[Gloock] text-[#2A1920] text-base leading-snug">{item.name}</h4>
            {item.badge && <Badge label={item.badge} />}
          </div>
          <span className="text-[#D89A27] font-bold text-sm flex-shrink-0 tabular-nums">{item.price}</span>
        </div>
        <p className="text-[#6B5A50] text-[13px] leading-relaxed">{item.description}</p>
        {(item.spiceLevel || item.tags?.length) && (
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {item.spiceLevel && (
              <span className="text-[9px] font-bold tracking-[0.18em] text-[#B85C38] uppercase border border-[#B85C38]/25 rounded-sm px-2 py-0.5">
                {item.spiceLevel}
              </span>
            )}
            {item.tags?.map((tag) => (
              <span key={tag} className="text-[9px] font-bold tracking-[0.18em] text-[#4E6650] uppercase border border-[#4E6650]/25 rounded-sm px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
