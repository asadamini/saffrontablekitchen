import { useState } from "react";
import {
  lunchBoxes, vegetarianItems, vegetarianEntrees, biryaniItems,
  fullMealUpgrade, appetizers, riceAndBread, desserts, drinks,
} from "../data/menuData";
import {
  imgNewVegTrays,
  imgMangoLassi, imgWaterBottle, imgSparklingWater, imgSodaCans, imgDrinksTray, imgLassiBottles,
  imgGulabJamunBowl, imgGulabJamunTray, imgBasmatiRice, imgNaan,
  imgBoxButterChicken, imgBoxTandoori, imgBoxLamb, imgBoxPaneer, imgBoxDal,
  imgChickenBiryani, imgVegBiryani, imgSamosa, imgSamosaTray, imgFullMealUpgrade,
} from "../data/imageAssets";
import { ImagePlaceholder, Badge } from "./shared";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import MenuCard from "./cards/MenuCard";
import BiryaniCard from "./cards/BiryaniCard";
import { Plus } from "lucide-react";

const TABS = ["Lunch Boxes", "Vegetarian", "Biryani", "Appetizers", "Rice & Bread", "Desserts", "Drinks"];

function MealInfoBar() {
  return (
    <div className="border border-[#3E2438]/8 rounded-sm bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#3E2438]/8 mb-8">
      {[
        { label: "MEAT LUNCH BOXES", desc: "One meat entrée + one vegetarian entrée." },
        { label: "VEGETARIAN LUNCH BOX", desc: "Two vegetarian entrées." },
        { label: "ALL BOXES INCLUDE", desc: "Basmati, naan, salad, mint & tamarind chutney." },
        { label: "BIRYANI MEALS", desc: "Standalone — raita, pickled onions, mint chutney." },
      ].map((info) => (
        <div key={info.label} className="px-5 py-4">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#D89A27] mb-1">{info.label}</p>
          <p className="text-[13px] text-[#6B5A50] leading-snug">{info.desc}</p>
        </div>
      ))}
    </div>
  );
}

function MenuListSection({ title, items, rowImage, imageMap }: {
  title?: string; items: typeof lunchBoxes; rowImage?: string; imageMap?: Record<string, string>;
}) {
  return (
    <div className="bg-white rounded-sm border border-[#3E2438]/6">
      {title && (
        <div className="px-6 py-4 border-b border-[#3E2438]/6">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2A1920]/40">{title}</p>
        </div>
      )}
      <div className="px-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} image={imageMap?.[item.id] ?? rowImage} />
        ))}
      </div>
    </div>
  );
}

function FullMealUpgradeRow() {
  return (
    <div className="mt-6 bg-white border border-[#D89A27]/20 rounded-sm p-5 flex items-center gap-5">
      <div className="w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden">
        <ImageWithFallback src={imgFullMealUpgrade} alt={fullMealUpgrade.imageAlt} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Plus size={12} className="text-[#D89A27]" strokeWidth={2.5} />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#D89A27]">Optional Add-On</span>
        </div>
        <div className="flex items-baseline gap-3">
          <h4 className="font-[Gloock] text-[#2A1920] text-lg">Full Meal Upgrade</h4>
          <span className="text-[#D89A27] font-bold">{fullMealUpgrade.price}</span>
        </div>
        <p className="text-[#6B5A50] text-[13px] mt-1">{fullMealUpgrade.includes.join(" · ")}</p>
      </div>
    </div>
  );
}

function VegEntreeCards() {
  const entreeImgs = [imgBoxPaneer, imgBoxDal];
  const entreePrices = ["Included in box", "Included in box"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
      {vegetarianEntrees.map((e, i) => (
        <div key={e.name} className="bg-white border border-[#4E6650]/15 rounded-sm p-5 flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-sm overflow-hidden bg-[#EDE5D8]">
            <ImageWithFallback
              src={entreeImgs[i]}
              alt={e.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-[Gloock] text-[#2A1920] text-base leading-snug">{e.name}</h4>
              <Badge label={e.badge} />
            </div>
            <p className="text-[#6B5A50] text-[13px] leading-relaxed mb-2">{e.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#B85C38] border border-[#B85C38]/25 rounded-sm px-2 py-0.5">
                {e.spiceLevel}
              </span>
              <span className="text-[#D89A27] font-bold text-sm">{entreePrices[i]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TabContent({ tab }: { tab: string }) {
  switch (tab) {
    case "Lunch Boxes":
      return (
        <div>
          <MealInfoBar />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {lunchBoxes.map((item) => (
              <div key={item.id} className="bg-white rounded-sm border border-[#3E2438]/6">
                <div className="px-6"><MenuCard item={item} image={{
                  "butter-chicken-dal": imgBoxButterChicken,
                  "butter-chicken-paneer": imgBoxButterChicken,
                  "tandoori-dal": imgBoxTandoori,
                  "tandoori-paneer": imgBoxTandoori,
                  "lamb-dal": imgBoxLamb,
                  "lamb-paneer": imgBoxLamb,
                }[item.id]} /></div>
              </div>
            ))}
          </div>
        </div>
      );
    case "Vegetarian":
      return (
        <div>
          <p className="text-[13px] text-[#6B5A50] bg-white border border-[#4E6650]/12 rounded-sm px-5 py-3 mb-6">
            The vegetarian lunch box includes two vegetarian entrées served with Golden Cumin Basmati, naan, cucumber tomato salad, mint chutney, and tamarind chutney.
          </p>
          <VegEntreeCards />
          <MenuListSection title="Vegetarian Lunch Box" items={vegetarianItems} imageMap={{ "paneer-dal-veg": imgBoxPaneer }} />
        </div>
      );
    case "Biryani":
      return (
        <div>
          <p className="text-[13px] text-[#6B5A50] bg-white border border-[#3E2438]/8 rounded-sm px-5 py-3 mb-6">
            Fragrant layered basmati rice served as a complete standalone meal with cucumber raita, pickled onions, and mint chutney. Biryani is not served alongside another curry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {biryaniItems.map((item) => (
              <BiryaniCard key={item.id} item={item} image={item.id === "chicken-biryani" ? imgChickenBiryani : imgVegBiryani} />
            ))}
          </div>
          <FullMealUpgradeRow />
        </div>
      );
    case "Appetizers":
      return (
        <MenuListSection items={appetizers} imageMap={{
          "veg-samosa": imgSamosa,
          "veg-samosa-tray": imgSamosaTray,
        }} />
      );
    case "Rice & Bread":
      return (
        <MenuListSection items={riceAndBread} imageMap={{
          "golden-cumin-basmati": imgBasmatiRice,
          "naan": imgNaan,
        }} />
      );
    case "Desserts":
      return (
        <MenuListSection items={desserts} imageMap={{
          "gulab-jamun": imgGulabJamunBowl,
          "gulab-jamun-tray": imgGulabJamunTray,
        }} />
      );
    case "Drinks":
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <MenuListSection items={drinks.slice(0, 3)} imageMap={{
            "mango-lassi": imgMangoLassi,
            "bottled-water": imgWaterBottle,
            "sparkling-water": imgSparklingWater,
          }} />
          <MenuListSection items={drinks.slice(3)} imageMap={{
            "canned-soda": imgSodaCans,
            "beverage-pack": imgDrinksTray,
            "mango-lassi-pack": imgLassiBottles,
          }} />
        </div>
      );
    default: return null;
  }
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("Lunch Boxes");

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FBF7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-12">
          <div className="flex-1">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B85C38] mb-4">Full Menu</p>
            <h2 className="font-[Gloock] text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] text-[#2A1920]">
              Warm, complete,<br className="hidden sm:block" /> and made for teams.
            </h2>
          </div>
          <p className="text-[#6B5A50] text-[15px] leading-relaxed max-w-sm lg:max-w-xs lg:pb-2">
            Choose a complete lunch box, biryani meal, catering package, appetizer, dessert, or drink.
          </p>
        </div>

        {/* Tabs */}
        <div className="-mx-4 px-4 overflow-x-auto scrollbar-hide mb-8">
          <div className="flex gap-1 w-max pb-1">
            {TABS.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={active}
                  className={`px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap rounded-sm transition-all duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] ${
                    active
                      ? "bg-[#3E2438] text-white"
                      : "bg-white text-[#2A1920]/60 hover:text-[#2A1920] border border-[#3E2438]/12"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <TabContent tab={activeTab} />
      </div>
    </section>
  );
}
