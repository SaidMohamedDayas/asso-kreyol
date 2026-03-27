import ContentBlock from "@/components/common/ContentBlock";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function PartnerShowcase({ partners }) {
  return (
    <SectionContainer className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <ContentBlock
          eyebrow={partners.eyebrow}
          title={partners.title}
          paragraphs={partners.description}
          className="max-w-2xl"
        />
        <div>
          <SecondaryButton href={partners.cta.href}>{partners.cta.label}</SecondaryButton>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {partners.items.map((item) => (
          <article
            key={item.title}
            className="surface-card flex min-h-36 flex-col items-start justify-between px-5 py-5"
            >
              <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
                Soutien
              </p>
              <div className="space-y-3">
                <h3 className="text-2xl leading-tight">{item.title}</h3>
                <p className="text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
      </div>
    </SectionContainer>
  );
}
