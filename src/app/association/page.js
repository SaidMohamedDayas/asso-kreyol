import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import Reveal from "@/components/shared/Reveal";
import { getPublicPage } from "@/data/pages";
import { createPageMetadata } from "@/lib/metadata";

const page = getPublicPage("association");

export const metadata = createPageMetadata({
  title: page.title,
  description: page.seoDescription,
});

export default function AssociationPage() {
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
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start">
            <ContentBlock
              eyebrow={page.sections.presentation.eyebrow}
              title={page.sections.presentation.title}
              paragraphs={page.sections.presentation.paragraphs}
            />

            <article className="surface-card px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.presentation.aside.eyebrow}
              </p>
              <h3 className="mt-4 text-[1.95rem] sm:text-4xl">
                {page.sections.presentation.aside.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {page.sections.presentation.aside.description}
              </p>
            </article>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
            <ContentBlock
              eyebrow={page.sections.mission.eyebrow}
              title={page.sections.mission.title}
              paragraphs={page.sections.mission.paragraphs}
            />
            <InfoCardGrid
              items={page.sections.mission.pillars}
              columns="md:grid-cols-2 xl:grid-cols-3"
            />
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <ContentBlock
            eyebrow={page.sections.values.eyebrow}
            title={page.sections.values.title}
            paragraphs={page.sections.values.description}
          />
        </Reveal>
        <InfoCardGrid
          items={page.sections.values.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-4"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <ContentBlock
            eyebrow={page.sections.team.eyebrow}
            title={page.sections.team.title}
            paragraphs={page.sections.team.description}
          />
        </Reveal>
        <InfoCardGrid
          items={page.sections.team.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
