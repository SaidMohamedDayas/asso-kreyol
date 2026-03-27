import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import VisualMosaic from "@/components/shared/VisualMosaic";
import { getPublicPage } from "@/data/pages";

const page = getPublicPage("artsFolklore");

export const metadata = {
  title: page.title,
  description: page.hero.description,
};

export default function ArtsFolklorePage() {
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
          <aside className="surface-card bg-[linear-gradient(180deg,rgba(238,180,39,0.1),rgba(255,255,255,0.82))] px-6 py-6 text-sm leading-7 text-muted sm:px-7">
            <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
              {page.sections.intro.aside.eyebrow}
            </p>
            <h3 className="mt-4 text-4xl text-foreground">
              {page.sections.intro.aside.title}
            </h3>
            <p className="mt-4">{page.sections.intro.aside.description}</p>
          </aside>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.formats.eyebrow}
          title={page.sections.formats.title}
          paragraphs={page.sections.formats.description}
        />
        <InfoCardGrid
          items={page.sections.formats.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-4"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="surface-card bg-[linear-gradient(180deg,rgba(238,180,39,0.12),rgba(255,255,255,0.92))] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch">
            <article className="rounded-[2rem] border border-white/80 bg-[linear-gradient(155deg,rgba(255,255,255,0.72),rgba(255,255,255,0.56))] p-6 shadow-[0_26px_58px_-42px_rgba(29,25,21,0.28)] sm:p-8">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.kreyolodays.featured.eyebrow}
              </p>
              <h3 className="mt-6 text-4xl sm:text-[2.8rem]">
                {page.sections.kreyolodays.featured.title}
              </h3>
              <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
                {page.sections.kreyolodays.featured.description}
              </p>
            </article>

            <ContentBlock
              eyebrow={page.sections.kreyolodays.eyebrow}
              title={page.sections.kreyolodays.title}
              paragraphs={page.sections.kreyolodays.description}
              className="rounded-[1.9rem] border border-white/75 bg-white/62 p-6 sm:p-8"
            />
          </div>

          <InfoCardGrid
            items={page.sections.kreyolodays.items}
            className="mt-6"
            columns="md:grid-cols-2 xl:grid-cols-4"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.gallery.eyebrow}
          title={page.sections.gallery.title}
          paragraphs={page.sections.gallery.description}
        />
        <VisualMosaic items={page.sections.gallery.items} className="mt-10" />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
