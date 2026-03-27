import ContentBlock from "@/components/common/ContentBlock";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function PartnerShowcase({ partners }) {
  return (
    <SectionContainer className="pt-2 sm:pt-6">
      <div className="surface-card relative isolate px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,81,42,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(238,180,39,0.08),transparent_24%)]"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <ContentBlock
            eyebrow={partners.eyebrow}
            title={partners.title}
            paragraphs={partners.description}
            className="max-w-2xl"
          />
          <div>
            <SecondaryButton href={partners.cta.href}>
              {partners.cta.label}
            </SecondaryButton>
          </div>
        </div>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {partners.items.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-44 flex-col items-center justify-center rounded-[1.6rem] border border-white/80 bg-white/74 px-5 py-6 text-center shadow-[0_22px_44px_-38px_rgba(29,25,21,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_54px_-40px_rgba(29,25,21,0.26)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-secondary/14 bg-[linear-gradient(180deg,rgba(242,238,232,0.96),rgba(255,255,255,0.86))] text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                {item.logoLabel || "TODO"}
              </div>
              <h3 className="mt-5 text-2xl leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
