import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <ContentBlock title="Un espace pour les pratiques et les formes sensibles." paragraphs={page.intro} />
          <aside className="surface-card px-6 py-6 text-sm leading-7 text-muted sm:px-7">
            TODO - Un encadré pourra ici rappeler un fil rouge éditorial, une
            prochaine action ou une mise en avant artistique.
          </aside>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {page.cards.map((card) => (
            <article
              key={card.title}
              className="surface-card flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                Activité
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
        <aside className="surface-card grid gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">Ouverture</p>
            <h2 className="text-4xl">Imaginer la suite.</h2>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {page.cta.description}
            </p>
          </div>
          <SecondaryButton href={page.cta.href}>{page.cta.label}</SecondaryButton>
        </aside>
      </SectionContainer>
    </SiteFrame>
  );
}
