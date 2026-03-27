import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import { getPublicPage } from "@/data/pages";

const page = getPublicPage("engagements");

export const metadata = {
  title: page.title,
  description: page.hero.description,
};

export default function EngagementsPage() {
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <ContentBlock
            eyebrow={page.sections.manifesto.eyebrow}
            title={page.sections.manifesto.title}
            paragraphs={page.sections.manifesto.paragraphs}
          />

          <article className="surface-card bg-[linear-gradient(180deg,rgba(186,33,29,0.08),rgba(255,255,255,0.82))] px-6 py-6 sm:px-7 sm:py-7">
            <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
              {page.sections.manifesto.aside.eyebrow}
            </p>
            <h3 className="mt-4 text-4xl">{page.sections.manifesto.aside.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {page.sections.manifesto.aside.description}
            </p>
          </article>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.cards.eyebrow}
          title={page.sections.cards.title}
          paragraphs={page.sections.cards.description}
        />
        <InfoCardGrid
          items={page.sections.cards.items}
          className="mt-10"
          columns="md:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.actions.eyebrow}
          title={page.sections.actions.title}
          paragraphs={page.sections.actions.description}
        />
        <InfoCardGrid
          items={page.sections.actions.items}
          className="mt-10"
          columns="md:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
