import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import VisualMosaic from "@/components/shared/VisualMosaic";
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
        <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start">
          <ContentBlock
            eyebrow={page.sections.intro.eyebrow}
            title={page.sections.intro.title}
            paragraphs={page.sections.intro.paragraphs}
          />

          <article className="surface-card bg-[linear-gradient(180deg,rgba(186,33,29,0.08),rgba(255,255,255,0.82))] px-6 py-6 sm:px-7 sm:py-7">
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
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="surface-card bg-[linear-gradient(180deg,rgba(186,33,29,0.08),rgba(255,255,255,0.9))] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-5 sm:gap-6 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-stretch">
            <ContentBlock
              eyebrow={page.sections.cycle.eyebrow}
              title={page.sections.cycle.title}
              paragraphs={page.sections.cycle.description}
              className="rounded-[1.9rem] border border-white/75 bg-white/62 p-6 sm:p-8"
            />

            <article className="rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.82),rgba(255,255,255,0.58))] p-6 shadow-[0_28px_64px_-42px_rgba(29,25,21,0.32)] sm:p-8">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.cycle.featured.eyebrow}
              </p>
              <h3 className="mt-6 text-[2rem] sm:text-[2.8rem]">
                {page.sections.cycle.featured.title}
              </h3>
              <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
                {page.sections.cycle.featured.description}
              </p>
            </article>
          </div>

          <InfoCardGrid
            items={page.sections.cycle.items}
            className="mt-6"
            columns="md:grid-cols-2 xl:grid-cols-4"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.resources.eyebrow}
          title={page.sections.resources.title}
          paragraphs={page.sections.resources.description}
        />
        <VisualMosaic items={page.sections.resources.items} className="mt-10" />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
