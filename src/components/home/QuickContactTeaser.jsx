import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function QuickContactTeaser({ contact }) {
  return (
    <SectionContainer className="pt-0">
      <aside className="surface-card relative isolate overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-green/10 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="max-w-3xl text-4xl sm:text-5xl">
              {contact.title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {contact.description}
            </p>
            <p className="text-sm font-medium text-secondary">{contact.note}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <PrimaryButton href={contact.primaryCta.href}>
              {contact.primaryCta.label}
            </PrimaryButton>
            <SecondaryButton href={contact.secondaryCta.href}>
              {contact.secondaryCta.label}
            </SecondaryButton>
          </div>
        </div>
      </aside>
    </SectionContainer>
  );
}
