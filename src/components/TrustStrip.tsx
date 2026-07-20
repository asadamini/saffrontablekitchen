import { trustItems } from "../data/menuData";

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-[#3E2438]/8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#3E2438]/8">
          {trustItems.map((item) => (
            <div key={item.id} className="px-6 py-6">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D89A27] mb-1.5">
                {item.title}
              </p>
              <p className="text-[#6B5A50] text-sm leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
