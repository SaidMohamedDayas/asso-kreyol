import PageIntro from "@/components/common/PageIntro";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import SecondaryButton from "@/components/common/SecondaryButton";
import SiteFrame from "@/components/layout/SiteFrame";
import site from "@/data/site";

const focusAreas = [
  {
    id: "01",
    title: "Mémoires & Histoire",
    description:
      "TODO - Donner ici un aperçu clair des archives, récits et repères historiques mis en avant.",
  },
  {
    id: "02",
    title: "Arts & Folklore",
    description:
      "TODO - Présenter plus tard les formes artistiques, les pratiques et les expressions culturelles.",
  },
  {
    id: "03",
    title: "Langue & Transmission",
    description:
      "TODO - Expliquer comment la langue, la pédagogie et le partage intergénérationnel seront abordés.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteFrame>
        <SectionContainer className="pt-10 sm:pt-16">
          <PageIntro
            eyebrow={site.name}
            title="Un site culturel en préparation, pensé comme un espace de mémoire, de création et de transmission."
            description="TODO - Ce texte introduira la vision du site, l'ancrage de l'association et les contenus à venir avec une parole plus précise."
            actions={
              <>
                <PrimaryButton href="#axes">Découvrir les axes</PrimaryButton>
                <SecondaryButton href={`mailto:${site.email}`}>
                  Prendre contact
                </SecondaryButton>
              </>
            }
          />
        </SectionContainer>

        <SectionContainer id="axes" className="pt-0">
          <div className="max-w-2xl space-y-4">
            <p className="eyebrow">Premiers repères</p>
            <SectionHeading>Trois lignes éditoriales pour poser la suite.</SectionHeading>
            <p className="text-base leading-8 text-muted sm:text-lg">
              TODO - Cette section présentera plus finement les grands champs du
              site et la manière dont ils s&apos;incarnent dans les futures pages.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.id}
                className="surface-card flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7"
              >
                <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                  {area.id}
                </p>
                <h3 className="text-3xl leading-tight sm:text-[2rem]">
                  {area.title}
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="prochainement" className="pt-0">
          <aside className="surface-card px-6 py-5 text-sm leading-7 text-muted sm:px-8">
            Le contenu détaillé arrive bientôt. TODO - Pages éditoriales,
            agenda, ressources et prises de parole seront ajoutés dans les
            prochaines étapes.
          </aside>
        </SectionContainer>
      </SiteFrame>
    </main>
  );
}
