import { imgKraftBoxes } from "../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Choose individual meals or catering",
    description: "Select complete lunch boxes, biryani meals, or a buffet-style catering package.",
  },
  {
    number: "02",
    title: "Select your meal combination",
    description: "Choose chicken, lamb, paneer, dal, biryani, rice, naan, samosas, desserts, and drinks.",
  },
  {
    number: "03",
    title: "We prepare and deliver",
    description: "Your order is prepared fresh, labeled for your team, and delivered to your workplace.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FBF7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image — kraft boxes + drinks showing complete order */}
          <div className="relative">
            <ImageWithFallback
              src={imgKraftBoxes}
              alt="Complete Indian office catering order with kraft lunch boxes, bags, mango lassi drinks, water, and soda"
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#D89A27]/35 rounded-br-sm pointer-events-none" />
          </div>

          {/* Steps */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B85C38] mb-4">Simple Process</p>
            <h2 className="font-[Gloock] text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] text-[#2A1920] mb-10">
              How ordering works
            </h2>

            <div className="border-t border-[#3E2438]/8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 py-6 border-b border-[#3E2438]/8">
                  <span className="font-[Gloock] text-[44px] text-[#3E2438]/10 leading-none w-14 flex-shrink-0 select-none mt-1">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-[Gloock] text-lg text-[#2A1920] mb-1.5">{step.title}</h3>
                    <p className="text-[#6B5A50] text-[15px] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-[#3E2438] text-white px-7 py-3.5 text-[12px] font-bold tracking-[0.15em] uppercase rounded-sm hover:bg-[#D89A27] transition-colors min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A27] focus-visible:ring-offset-2"
              >
                Start Your Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
