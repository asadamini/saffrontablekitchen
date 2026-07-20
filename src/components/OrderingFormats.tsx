import { ArrowRight } from "lucide-react";
import { categoryCards } from "../data/menuData";
import {
  imgBoxButterChicken,
  imgBoxPaneer,
  imgChickenBiryani,
  imgNewTrayBuffet,
} from "../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const cardImages = [imgBoxButterChicken, imgBoxPaneer, imgChickenBiryani, imgNewTrayBuffet];

const cardAlts = [
  "Black individual lunch box with butter chicken, rice, naan, salad and chutney",
  "Black individual lunch box with paneer makhani, rice, naan and salad",
  "Chicken dum biryani in copper bowl with raita, pickled onions and mint chutney",
  "Full Indian buffet spread with chafing dishes, tandoori chicken, curries and sides",
];

export default function OrderingFormats() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B85C38] mb-4">
              Order Your Way
            </p>
            <h2 className="font-[Gloock] text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] text-[#2A1920] max-w-lg">
              Complete Indian meals for every type of order
            </h2>
          </div>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D89A27] hover:gap-3 transition-all flex-shrink-0 focus-visible:outline-none focus-visible:underline"
          >
            View full menu <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categoryCards.map((card, i) => (
            <a
              key={card.id}
              href="#menu"
              className="group relative bg-white overflow-hidden rounded-sm hover:shadow-lg transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] flex flex-col"
            >
              {/* Number badge */}
              <div className="absolute top-3 right-3 z-10 bg-black/30 backdrop-blur-sm rounded-sm px-2 py-0.5">
                <span className="font-[Gloock] text-[11px] text-white/80 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Real food photo */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={cardImages[i]}
                  alt={cardAlts[i]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col border-t border-[#3E2438]/6">
                <h3 className="font-[Gloock] text-[#2A1920] text-lg leading-snug mb-2 group-hover:text-[#D89A27] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#6B5A50] text-sm leading-relaxed flex-1 mb-3">
                  {card.description}
                </p>
                <p className="text-[#D89A27] font-semibold text-sm">{card.startingPrice}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
