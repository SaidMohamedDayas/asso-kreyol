import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import { getPublicPage } from "@/data/pages";
import site from "@/data/site";
import { isExternalHref } from "@/lib/utils";

const page = getPublicPage("contact");
const socialEntries = Object.entries(site.socialLinks || {});

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
            title="Écrire à l'association"
            paragraphs={page.intro}
          >
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <PrimaryButton href={`mailto:${site.email}`}>Envoyer un message</PrimaryButton>
              <SecondaryButton href="/">Retour à l&apos;accueil</SecondaryButton>
            </div>
          </ContentBlock>

          <div className="space-y-4">
            <article className="surface-card px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                Contact direct
              </p>
              <h2 className="mt-4 text-3xl">Adresse de contact</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex text-base font-semibold text-foreground underline decoration-border underline-offset-6"
              >
                {site.email}
              </a>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                TODO - Ajouter ici plus tard les indications utiles pour orienter
                les demandes, collaborations ou prises de parole.
              </p>
            </article>

            <article className="surface-card px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                Présence publique
              </p>
              <h2 className="mt-4 text-3xl">Liens sociaux</h2>
              <div className="mt-5 space-y-3">
                {socialEntries.map(([network, value]) =>
                  isExternalHref(value) ? (
                    <a
                      key={network}
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-border/90 bg-white/55 px-4 py-3 text-sm font-medium"
                    >
                      <span className="capitalize">{network}</span>
                      <span className="text-muted">ouvrir</span>
                    </a>
                  ) : (
                    <div
                      key={network}
                      className="flex items-center justify-between rounded-2xl border border-border/90 bg-white/55 px-4 py-3 text-sm font-medium"
                    >
                      <span className="capitalize">{network}</span>
                      <span className="text-muted">{value}</span>
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
          TODO - Un formulaire plus complet, des informations pratiques
          complémentaires ou des modalités de rendez-vous pourront être ajoutés
          dans une prochaine étape si nécessaire.
        </aside>
      </SectionContainer>
    </SiteFrame>
  );
}
