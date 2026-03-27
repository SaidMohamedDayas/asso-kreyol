import SecondaryButton from "@/components/common/SecondaryButton";
import PageIntro from "@/components/common/PageIntro";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";

export default function PlaceholderPage({
  title,
  eyebrow = "Page publique",
  description,
}) {
  const contentDescription =
    description ||
    `TODO - Le contenu éditorial de la page ${title} sera développé dans une prochaine étape.`;

  return (
    <SiteFrame>
      <SectionContainer className="pt-10 sm:pt-14">
        <PageIntro
          eyebrow={eyebrow}
          title={title}
          description={contentDescription}
          actions={
            <SecondaryButton href="/">Retour à l’accueil</SecondaryButton>
          }
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <aside className="surface-card max-w-3xl px-6 py-5 text-sm leading-7 text-muted sm:px-8">
          TODO - Cette rubrique disposera bientôt de contenus détaillés,
          d’éléments éditoriaux et d’une structure plus complète.
        </aside>
      </SectionContainer>
    </SiteFrame>
  );
}
