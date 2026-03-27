import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import { getPublicPage } from "@/data/pages";

const page = getPublicPage("association");

export const metadata = {
  title: page.title,
  description: page.hero.description,
};

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
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <ContentBlock
            title={page.sections.presentation.title}
            paragraphs={page.sections.presentation.paragraphs}
          />
          <ContentBlock
            title={page.sections.mission.title}
            paragraphs={page.sections.mission.paragraphs}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <ContentBlock
          eyebrow={page.sections.values.eyebrow}
          title={page.sections.values.title}
          paragraphs={page.sections.values.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.sections.values.items.map((value, index) => (
            <article
              key={value.title}
              className="surface-card flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                0{index + 1}
              </p>
              <h2 className="text-3xl leading-tight">{value.title}</h2>
              <p className="text-sm leading-7 text-muted sm:text-base">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <aside className="surface-card grid gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{page.cta.eyebrow}</p>
            <h2 className="text-4xl">{page.cta.title}</h2>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {page.cta.description}
            </p>
          </div>
          <div>
            <PrimaryButton href={page.cta.href}>{page.cta.label}</PrimaryButton>
          </div>
        </aside>
      </SectionContainer>
    </SiteFrame>
  );
}
