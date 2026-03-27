import ContentBlock from "@/components/common/ContentBlock";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function IntroSection({ intro }) {
  return (
    <SectionContainer className="pt-0">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
        <div className="space-y-6">
          <ContentBlock
            eyebrow={intro.eyebrow}
            title={intro.title}
            paragraphs={intro.paragraphs}
          />
          <SecondaryButton href={intro.cta.href}>{intro.cta.label}</SecondaryButton>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {intro.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="surface-card flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                0{index + 1}
              </p>
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
