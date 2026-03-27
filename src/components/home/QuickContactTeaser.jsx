import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function QuickContactTeaser({ contact }) {
  return (
    <SectionContainer className="pt-2 sm:pt-6">
      <aside className="surface-card relative isolate overflow-hidden px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-green/10 blur-3xl"
        />

        <div className="relative grid gap-6 sm:gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-center">
          <div className="space-y-4 sm:space-y-5">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="max-w-3xl text-[2rem] sm:text-4xl xl:text-5xl">
              {contact.title}
            </h2>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8">
              {contact.description}
            </p>
            <div className="fine-rule max-w-xl" />
            <p className="text-sm font-medium text-secondary">{contact.note}</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/80 bg-white/78 p-5 shadow-[0_24px_48px_-40px_rgba(29,25,21,0.24)] sm:p-6">
            <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
              Contact direct
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              TODO - Les modalités pratiques et les usages de contact seront précisés
              ultérieurement.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <PrimaryButton href={contact.primaryCta.href} className="w-full">
                {contact.primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={contact.secondaryCta.href} className="w-full">
                {contact.secondaryCta.label}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </aside>
    </SectionContainer>
  );
}
