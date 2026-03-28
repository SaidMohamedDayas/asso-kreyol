import ContentBlock from "@/components/common/ContentBlock";
import PageHero from "@/components/common/PageHero";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import SiteFrame from "@/components/layout/SiteFrame";
import InfoCardGrid from "@/components/shared/InfoCardGrid";
import PageCta from "@/components/shared/PageCta";
import Reveal from "@/components/shared/Reveal";
import { getPublicPage } from "@/data/pages";
import { createPageMetadata } from "@/lib/metadata";

const page = getPublicPage("contact");
const formDescriptionId = "contact-form-description";

function getAutoComplete(fieldId) {
  switch (fieldId) {
    case "contact-name":
      return "name";
    case "contact-email":
      return "email";
    default:
      return undefined;
  }
}

export const metadata = createPageMetadata({
  title: page.title,
  description: page.seoDescription,
});

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
        <Reveal variant="fadeUp">
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
            <ContentBlock
              eyebrow={page.sections.intro.eyebrow}
              title={page.sections.intro.title}
              paragraphs={page.sections.intro.paragraphs}
            />

            <article className="surface-card bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.82))] px-6 py-6 sm:px-7 sm:py-7">
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
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <ContentBlock
            eyebrow={page.sections.methods.eyebrow}
            title={page.sections.methods.title}
            paragraphs={page.sections.methods.description}
          />
        </Reveal>
        <InfoCardGrid
          items={page.sections.methods.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <ContentBlock
            eyebrow={page.sections.social.eyebrow}
            title={page.sections.social.title}
            paragraphs={page.sections.social.description}
          />
        </Reveal>
        <InfoCardGrid
          items={page.sections.social.items}
          className="mt-10"
          columns="md:grid-cols-2 xl:grid-cols-3"
        />
      </SectionContainer>

      <SectionContainer className="pt-0">
        <Reveal variant="fadeUp">
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
            <article className="surface-card px-6 py-6 sm:px-8 sm:py-8">
              <p className="eyebrow">{page.sections.form.eyebrow}</p>
              <h2 className="mt-5 text-[2rem] sm:text-4xl">{page.sections.form.title}</h2>
              <p
                id={formDescriptionId}
                className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8"
              >
                {page.sections.form.description}
              </p>

              <form
                noValidate
                aria-describedby={formDescriptionId}
                className="mt-6 space-y-5 sm:mt-8"
              >
                {page.sections.form.fields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="text-sm font-semibold text-foreground">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                        autoComplete={getAutoComplete(field.id)}
                        className="field-textarea"
                      />
                    ) : (
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        autoComplete={getAutoComplete(field.id)}
                        className="field-input"
                      />
                    )}
                  </div>
                ))}

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <PrimaryButton disabled aria-disabled="true">
                    TODO - Formulaire non connecté
                  </PrimaryButton>
                  <SecondaryButton href={page.cta.primaryAction.href}>
                    {page.cta.primaryAction.label}
                  </SecondaryButton>
                </div>
              </form>
            </article>

            <article className="surface-card bg-[linear-gradient(180deg,rgba(242,238,232,0.86),rgba(255,255,255,0.8))] px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                TODO
              </p>
              <h2 className="mt-4 text-[2rem] sm:text-4xl">Avant d’écrire</h2>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {page.sections.form.note}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <SecondaryButton href={page.cta.primaryAction.href}>
                  {page.cta.primaryAction.label}
                </SecondaryButton>
                <SecondaryButton href={page.cta.secondaryAction.href}>
                  {page.cta.secondaryAction.label}
                </SecondaryButton>
              </div>
            </article>
          </div>
        </Reveal>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <PageCta {...page.cta} />
      </SectionContainer>
    </SiteFrame>
  );
}
