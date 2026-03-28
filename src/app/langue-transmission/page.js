import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import Reveal from "@/components/shared/Reveal";
import { getPublicPage } from "@/data/pages";
import { createPageMetadata } from "@/lib/metadata";

const page = getPublicPage("langueTransmission");

export const metadata = createPageMetadata({
  title: page.title,
  description: page.seoDescription,
});

export default function LangueTransmissionPage() {
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
        <Reveal variant="fadeUp">
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
            <ContentBlock
              eyebrow={page.sections.intro.eyebrow}
              title={page.sections.intro.title}
              paragraphs={page.sections.intro.paragraphs}
            />

            <article className="surface-card bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.82))] px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.intro.aside.eyebrow}
              </p>
              <h3 className="mt-4 text-[1.95rem] sm:text-4xl">
                {page.sections.intro.aside.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {page.sections.intro.aside.description}
              </p>
            </article>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <ContentBlock
            eyebrow={page.sections.cards.eyebrow}
            title={page.sections.cards.title}
            paragraphs={page.sections.cards.description}
          />
        </Reveal>
        <InfoCardGrid
          items={page.sections.cards.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <div className="surface-card bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.9))] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <ContentBlock
              eyebrow={page.sections.intergenerational.eyebrow}
              title={page.sections.intergenerational.title}
              paragraphs={page.sections.intergenerational.description}
              className="max-w-2xl"
            />
            <InfoCardGrid
              items={page.sections.intergenerational.panels}
              className="mt-10"
              columns="md:grid-cols-2"
            />
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
