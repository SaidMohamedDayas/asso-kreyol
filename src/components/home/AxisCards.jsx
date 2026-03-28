import Link from "next/link";
import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/shared/Reveal";

export default function AxisCards({ axes }) {
  const toneClasses = [
    "bg-[linear-gradient(180deg,rgba(186,33,29,0.07),rgba(255,255,255,0.78))]",
    "bg-[linear-gradient(180deg,rgba(238,180,39,0.09),rgba(255,255,255,0.8))]",
    "bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.8))]",
    "bg-[linear-gradient(180deg,rgba(125,81,42,0.08),rgba(255,255,255,0.82))]",
  ];

  return (
    <SectionContainer id="axes" className="pt-2 sm:pt-4">
      <Reveal variant="fadeUp">
        <ContentBlock
          eyebrow={axes.eyebrow}
          title={axes.title}
          paragraphs={axes.description}
          className="max-w-2xl"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
        {axes.items.map((item, index) => (
          <Reveal key={item.href} delay={index * 0.06} className="h-full">
            <Link
              href={item.href}
              className={`surface-card interactive-card group relative isolate flex min-h-[17rem] h-full flex-col gap-6 px-5 py-5 sm:min-h-[18.5rem] sm:gap-8 sm:px-7 sm:py-7 ${toneClasses[index] || toneClasses[0]}`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/80 bg-white/48 transition-transform duration-300 group-hover:scale-110 sm:right-5 sm:top-5 sm:h-16 sm:w-16"
              />
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                  {item.label}
                </p>
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/90 bg-white/76 text-lg text-secondary shadow-[0_16px_28px_-22px_rgba(29,25,21,0.16)] transition-colors group-hover:text-foreground"
                >
                  ↗
                </span>
              </div>
              <div className="relative space-y-4">
                <h3 className="text-[1.9rem] leading-tight sm:text-3xl">{item.title}</h3>
                <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>
              <div className="fine-rule mt-auto max-w-[10rem]" />
              <p className="text-sm font-semibold text-foreground">
                Découvrir l’axe
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
