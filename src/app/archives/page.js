import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import VisualMosaic from "@/components/shared/VisualMosaic";
import { getPublicPage } from "@/data/pages";

const page = getPublicPage("archives");

export const metadata = {
  title: page.title,
  description: page.hero.description,
};

export default function ArchivesPage() {
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <ContentBlock
            eyebrow={page.sections.intro.eyebrow}
            title={page.sections.intro.title}
            paragraphs={page.sections.intro.paragraphs}
          />
          <article className="surface-card bg-[linear-gradient(180deg,rgba(125,81,42,0.08),rgba(255,255,255,0.82))] px-6 py-6 sm:px-7 sm:py-7">
            <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
              {page.sections.intro.aside.eyebrow}
            </p>
            <h3 className="mt-4 text-4xl">{page.sections.intro.aside.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {page.sections.intro.aside.description}
            </p>
          </article>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.filters.eyebrow}
          title={page.sections.filters.title}
          paragraphs={page.sections.filters.description}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {page.sections.filters.items.map((item) => (
            <span key={item} className="tag-pill">
              {item}
            </span>
          ))}
        </div>

        <ContentBlock
          eyebrow={page.sections.cards.eyebrow}
          title={page.sections.cards.title}
          paragraphs={page.sections.cards.description}
          className="mt-10"
        />
        <InfoCardGrid
          items={page.sections.cards.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-4"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.paths.eyebrow}
          title={page.sections.paths.title}
          paragraphs={page.sections.paths.description}
        />
        <VisualMosaic items={page.sections.paths.items} className="mt-10" />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
