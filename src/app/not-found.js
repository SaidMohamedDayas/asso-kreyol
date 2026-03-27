import Link from "next/link";
import PageIntro from "@/components/common/PageIntro";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import { getNavigationItems } from "@/data/navigation";
import { createPageMetadata } from "@/lib/metadata";

const suggestedLinks = getNavigationItems(["/", "/association", "/contact"]);

export const metadata = createPageMetadata({
  title: "Page introuvable",
  description:
    "La page demandée n’a pas été trouvée. Revenir à l’accueil ou poursuivre la visite du site.",
});

export default function NotFound() {
  return (
    <SiteFrame>
      <SectionContainer className="pt-8 sm:pt-12">
        <PageIntro
          eyebrow="Erreur 404"
          title="Page introuvable"
          description="La page que vous cherchez n’est pas disponible ou a peut-être changé d’emplacement. Vous pouvez revenir à l’accueil ou poursuivre votre visite à partir des principales rubriques du site."
          actions={
            <>
              <PrimaryButton href="/">Retour à l’accueil</PrimaryButton>
              <SecondaryButton href="/contact">Nous contacter</SecondaryButton>
            </>
          }
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="surface-card grid gap-6 px-5 py-5 sm:px-8 sm:py-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Continuer la visite</p>
            <h2 className="text-[2rem] sm:text-4xl">
              Quelques points d’entrée utiles.
            </h2>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8">
              Si vous cherchiez une rubrique précise, ces accès rapides permettent de
              retrouver les principales pages publiques du site.
            </p>
          </div>

          <nav aria-label="Liens utiles après une erreur 404">
            <ul className="space-y-3">
              {suggestedLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-nav-link interactive-card"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SectionContainer>
    </SiteFrame>
  );
}
