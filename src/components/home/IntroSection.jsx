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
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-12">
        <article className="surface-card flex h-full flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8">
          <ContentBlock
            eyebrow={intro.eyebrow}
            title={intro.title}
            paragraphs={intro.paragraphs}
            className="max-w-none"
          />
          <div className="fine-rule" />
          <SecondaryButton href={intro.cta.href} className="w-full self-start sm:w-auto">
            {intro.cta.label}
          </SecondaryButton>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
          {intro.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`surface-card flex h-full flex-col gap-4 px-5 py-5 transition-transform duration-300 hover:-translate-y-1 sm:gap-5 sm:px-7 sm:py-7 ${toneClasses[index] || toneClasses[0]}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/78 text-sm font-semibold tracking-[0.2em] text-secondary shadow-[0_14px_30px_-24px_rgba(29,25,21,0.2)]">
                0{index + 1}
              </span>
              <h3 className="text-[1.85rem] leading-tight sm:text-3xl">{pillar.title}</h3>
              <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
