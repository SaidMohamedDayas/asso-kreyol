import ContentBlock from "@/components/common/ContentBlock";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function IntroSection({ intro }) {
  const toneClasses = [
    "bg-[linear-gradient(180deg,rgba(186,33,29,0.08),rgba(255,255,255,0.78))]",
    "bg-[linear-gradient(180deg,rgba(238,180,39,0.1),rgba(255,255,255,0.8))]",
    "bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.8))]",
  ];

  return (
    <SectionContainer className="pt-2 sm:pt-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
        <article className="surface-card flex h-full flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8">
          <ContentBlock
            eyebrow={intro.eyebrow}
            title={intro.title}
            paragraphs={intro.paragraphs}
            className="max-w-none"
          />
          <div className="fine-rule" />
          <SecondaryButton href={intro.cta.href} className="self-start">
            {intro.cta.label}
          </SecondaryButton>
        </article>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {intro.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`surface-card flex h-full flex-col gap-5 px-6 py-6 transition-transform duration-300 hover:-translate-y-1 sm:px-7 sm:py-7 ${toneClasses[index] || toneClasses[0]}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/78 text-sm font-semibold tracking-[0.2em] text-secondary shadow-[0_14px_30px_-24px_rgba(29,25,21,0.2)]">
                0{index + 1}
              </span>
              <h3 className="text-3xl leading-tight">{pillar.title}</h3>
              <p className="text-sm leading-7 text-muted sm:text-base">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
