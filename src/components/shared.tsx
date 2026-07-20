import { ImageIcon } from "lucide-react";
import { clsx } from "clsx";

export function ImagePlaceholder({ filename, alt, className, aspectRatio = "4/3" }: {
  filename: string; alt: string; className?: string; aspectRatio?: "16/10" | "4/3" | "1/1" | "16/9";
}) {
  const ratioMap = { "16/10": "aspect-[16/10]", "4/3": "aspect-[4/3]", "1/1": "aspect-square", "16/9": "aspect-video" };
  return (
    <div className={clsx("relative bg-[#DDD5C8] flex flex-col items-center justify-center overflow-hidden rounded-[6px]", ratioMap[aspectRatio], className)} role="img" aria-label={alt}>
      <ImageIcon className="w-6 h-6 text-[#A89880] mb-2" strokeWidth={1.5} />
      <span className="text-[10px] text-[#8A7A68] font-mono text-center px-4 leading-relaxed break-all">{filename}</span>
    </div>
  );
}

export function Badge({ label }: { label: string }) {
  const isVeg = label === "VEGETARIAN";
  const isPremium = label === "PREMIUM" || label === "BEST VALUE";
  const isPopular = label === "MOST POPULAR";
  const cls = isVeg ? "bg-[#4E6650] text-white" : isPremium ? "bg-[#B85C38] text-white" : isPopular ? "bg-[#D89A27] text-white" : "bg-[#3E2438] text-white";
  return (
    <span className={clsx("inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-[0.18em] uppercase rounded-sm", cls)}>
      {label}
    </span>
  );
}

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={clsx("text-[10px] font-bold tracking-[0.25em] uppercase mb-4", light ? "text-[#D89A27]" : "text-[#B85C38]")}>
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, heading, subheading, light, centered }: {
  eyebrow?: string; heading: string; subheading?: string; light?: boolean; centered?: boolean;
}) {
  return (
    <div className={clsx("mb-14", centered && "text-center")}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={clsx("font-[Gloock] text-4xl md:text-5xl lg:text-[54px] leading-[1.08] tracking-[-0.02em] mb-5", light ? "text-white" : "text-[#2A1920]")}>
        {heading}
      </h2>
      {subheading && (
        <p className={clsx("text-base md:text-lg leading-relaxed max-w-xl", light ? "text-white/60" : "text-[#6B5A50]", centered && "mx-auto")}>
          {subheading}
        </p>
      )}
    </div>
  );
}

export function Button({ variant = "primary", href, children, className, ...props }: {
  variant?: "primary" | "ghost" | "outline"; href?: string; children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D89A27]";
  const variants = {
    primary: "bg-[#D89A27] text-white hover:bg-[#C48A1F] rounded-sm",
    ghost: "bg-white/10 text-white border border-white/25 hover:bg-white/20 rounded-sm",
    outline: "bg-transparent text-[#2A1920] border border-[#2A1920]/25 hover:bg-[#3E2438] hover:text-white rounded-sm",
  };
  const cls = clsx(base, variants[variant], className);
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
