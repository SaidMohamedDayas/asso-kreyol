import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import { getPublicPage } from "@/data/pages";
import socials from "@/data/socials";
import site from "@/data/site";
import { isExternalHref } from "@/lib/utils";

const page = getPublicPage("contact");

export const metadata = {
  title: page.title,
  description: page.hero.description,
};

export default function ContactPage() {
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <ContentBlock
            title={page.sections.intro.title}
            paragraphs={page.sections.intro.paragraphs}
          >
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <PrimaryButton href={page.actions.primary.href}>
                {page.actions.primary.label}
              </PrimaryButton>
              <SecondaryButton href={page.actions.secondary.href}>
                {page.actions.secondary.label}
              </SecondaryButton>
            </div>
          </ContentBlock>

          <div className="space-y-4">
            <article className="surface-card px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.directCard.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl">{page.sections.directCard.title}</h2>
              <a
                href={site.contact.emailHref}
                className="mt-5 inline-flex text-base font-semibold text-foreground underline decoration-border underline-offset-6"
              >
                {site.contact.email}
              </a>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {page.sections.directCard.description}
              </p>
            </article>

            <article className="surface-card px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {page.sections.socialCard.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl">{page.sections.socialCard.title}</h2>
              <div className="mt-5 space-y-3">
                {socials.map((item) =>
                  isExternalHref(item.href) ? (
                    <a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-border/90 bg-white/55 px-4 py-3 text-sm font-medium"
                    >
                      <span>{item.label}</span>
                      <span className="text-muted">ouvrir</span>
                    </a>
                  ) : (
                    <div
                      key={item.key}
                      className="flex items-center justify-between rounded-2xl border border-border/90 bg-white/55 px-4 py-3 text-sm font-medium"
                    >
                      <span>{item.label}</span>
                      <span className="text-muted">{item.handle}</span>
                    </div>
                  )
                )}
              </div>
            </article>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <aside className="surface-card px-6 py-6 text-sm leading-7 text-muted sm:px-8 sm:py-7">
          {page.sections.followUpNote}
        </aside>
      </SectionContainer>
    </SiteFrame>
  );
}
