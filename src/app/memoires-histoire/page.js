import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import { getPublicPage } from "@/data/pages";

const page = getPublicPage("memoiresHistoire");

export const metadata = {
  title: page.title,
  description: page.hero.description,
};

export default function MemoiresHistoirePage() {
  return (
    <SiteFrame>
      <SectionContainer className="pt-8 sm:pt-12">
        <PageHero
          eyebrow={page.hero.eyebrow}
          title={page.title}
          description={page.hero.description}
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          title={page.sections.intro.title}
          paragraphs={page.sections.intro.paragraphs}
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.cards.eyebrow}
          title={page.sections.cards.title}
          paragraphs={page.sections.cards.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.sections.cards.items.map((card, index) => (
            <article
              key={card.title}
              className="surface-card flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.cards.labelPrefix} 0{index + 1}
              </p>
              <h2 className="text-3xl leading-tight">{card.title}</h2>
              <p className="text-sm leading-7 text-muted sm:text-base">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <aside className="surface-card flex flex-col gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">{page.cta.eyebrow}</p>
            <h2 className="text-4xl">{page.cta.title}</h2>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {page.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={page.cta.href}>{page.cta.label}</PrimaryButton>
            <SecondaryButton href={page.cta.secondaryAction.href}>
              {page.cta.secondaryAction.label}
            </SecondaryButton>
          </div>
        </aside>
      </SectionContainer>
    </SiteFrame>
  );
}
