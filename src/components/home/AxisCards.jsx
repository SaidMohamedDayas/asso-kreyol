import Link from "next/link";
import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";

export default function AxisCards({ axes }) {
  const toneClasses = [
    "bg-[linear-gradient(180deg,rgba(186,33,29,0.07),rgba(255,255,255,0.78))]",
    "bg-[linear-gradient(180deg,rgba(238,180,39,0.09),rgba(255,255,255,0.8))]",
    "bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.8))]",
    "bg-[linear-gradient(180deg,rgba(125,81,42,0.08),rgba(255,255,255,0.82))]",
  ];

  return (
    <SectionContainer id="axes" className="pt-2 sm:pt-4">
      <ContentBlock
        eyebrow={axes.eyebrow}
        title={axes.title}
        paragraphs={axes.description}
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
        {axes.items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`surface-card interactive-card group relative isolate flex min-h-[16.5rem] h-full flex-col gap-6 px-5 py-5 transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_28px_64px_-42px_rgba(29,25,21,0.32)] sm:min-h-[19rem] sm:gap-8 sm:px-7 sm:py-7 ${toneClasses[index] || toneClasses[0]}`}
          >
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/90 bg-white/72 text-lg text-secondary transition-colors group-hover:text-foreground"
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
            <p className="mt-auto text-sm font-semibold text-foreground">
              Découvrir l’axe
            </p>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
