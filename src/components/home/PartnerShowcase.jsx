import Image from "next/image";
import ContentBlock from "@/components/common/ContentBlock";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/shared/Reveal";

export default function PartnerShowcase({ partners }) {
  return (
    <SectionContainer className="pt-2 sm:pt-6">
      <div className="surface-card relative isolate px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,81,42,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(238,180,39,0.08),transparent_24%)]"
        />

        <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal variant="fadeUp">
            <ContentBlock
              eyebrow={partners.eyebrow}
              title={partners.title}
              paragraphs={partners.description}
              className="max-w-2xl"
            />
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <div>
              <SecondaryButton href={partners.cta.href} className="w-full sm:w-auto">
                {partners.cta.label}
              </SecondaryButton>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {partners.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <article className="interactive-card group flex min-h-44 flex-col items-center justify-between rounded-[1.6rem] border border-white/80 bg-white/74 px-5 py-6 text-center shadow-[0_22px_44px_-38px_rgba(29,25,21,0.22)] sm:min-h-[15rem]">
              <div className="relative flex h-[5.5rem] w-full max-w-[10.75rem] items-center justify-center overflow-hidden rounded-[1.2rem] border border-secondary/14 bg-[linear-gradient(180deg,rgba(242,238,232,0.96),rgba(255,255,255,0.92))] px-3 py-3">
                {item.logoSrc ? (
                  <Image
                    src={item.logoSrc}
                    alt={item.logoAlt || ""}
                    fill
                    sizes="160px"
                    className="object-contain p-3"
                  />
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                    {item.logoLabel || "TODO"}
                  </span>
                )}
              </div>
              <div className="mt-5 space-y-3">
                <h3 className="text-[1.35rem] leading-tight sm:text-[1.5rem]">{item.title}</h3>
                <p className="text-sm leading-7 text-muted">{item.description}</p>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
