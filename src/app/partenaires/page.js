import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import { getPublicPage } from "@/data/pages";
import { createPageMetadata } from "@/lib/metadata";

const page = getPublicPage("partenaires");

export const metadata = createPageMetadata({
  title: page.title,
  description: page.seoDescription,
});

export default function PartenairesPage() {
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
        <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
          <ContentBlock
            eyebrow={page.sections.intro.eyebrow}
            title={page.sections.intro.title}
            paragraphs={page.sections.intro.paragraphs}
          />
          <article className="surface-card bg-[linear-gradient(180deg,rgba(238,180,39,0.1),rgba(255,255,255,0.82))] px-6 py-6 sm:px-7 sm:py-7">
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
        <ContentBlock
          eyebrow={page.sections.showcase.eyebrow}
          title={page.sections.showcase.title}
          paragraphs={page.sections.showcase.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.sections.showcase.items.map((item) => (
            <article
              key={item.title}
              className="surface-card flex min-h-44 flex-col items-center justify-center px-6 py-6 text-center sm:min-h-48 sm:px-7 sm:py-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-secondary/14 bg-[linear-gradient(180deg,rgba(242,238,232,0.96),rgba(255,255,255,0.86))] text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                {item.logoLabel}
              </div>
              <h3 className="mt-5 text-[1.9rem] leading-tight sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.reasons.eyebrow}
          title={page.sections.reasons.title}
          paragraphs={page.sections.reasons.description}
        />
        <InfoCardGrid
          items={page.sections.reasons.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.collaborations.eyebrow}
          title={page.sections.collaborations.title}
          paragraphs={page.sections.collaborations.description}
        />
        <InfoCardGrid
          items={page.sections.collaborations.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-4"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="surface-card grid gap-8 px-6 py-6 sm:gap-10 sm:px-8 sm:py-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
          <ContentBlock
            eyebrow={page.sections.becomePartner.eyebrow}
            title={page.sections.becomePartner.title}
            paragraphs={page.sections.becomePartner.paragraphs}
          />

          <article className="rounded-[1.7rem] border border-white/80 bg-white/76 px-6 py-6 sm:px-7 sm:py-7">
            <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
              TODO
            </p>
            <h3 className="mt-4 text-[1.95rem] sm:text-4xl">Premiers éléments utiles</h3>
            <ul className="mt-5 list-none space-y-3 p-0 text-sm leading-7 text-muted sm:text-base">
              {page.sections.becomePartner.points.map((point) => (
                <li key={point} className="rounded-2xl bg-muted/55 px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
