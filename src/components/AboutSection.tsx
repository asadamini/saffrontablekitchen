import { imgOfficeServing } from "../data/imageAssets";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FBF7EF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B85C38] mb-4">Our Kitchen</p>
            <h2 className="font-[Gloock] text-4xl md:text-5xl leading-[1.08] tracking-[-0.02em] text-[#2A1920] mb-6">
              Indian food thoughtfully prepared for modern teams
            </h2>
            <div className="border-l-2 border-[#D89A27] pl-5 flex flex-col gap-4 text-[#6B5A50] text-[15px] leading-relaxed">
              <p>
                Saffron Table Indian Kitchen was created for office lunches, meetings, trainings, client events, and recurring workplace meals.
              </p>
              <p>
                Our menu focuses on complete lunch boxes, biryani meals, and catering packages that balance familiar Indian favorites with simple ordering and professional presentation.
              </p>
              <p>
                Choose butter chicken, char-grilled tandoori chicken, lamb rogan josh, paneer makhani, yellow dal, fragrant basmati rice, naan, samosas, and desserts for a meal designed around your team.
              </p>
            </div>
          </div>

          {/* Office serving photo */}
          <div className="relative">
            <ImageWithFallback
              src={imgOfficeServing}
              alt="Professionals serving Indian catering in an office setting with butter chicken, rice, naan, and chutneys"
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#3E2438]/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
