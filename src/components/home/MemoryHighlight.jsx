import ContentBlock from "@/components/common/ContentBlock";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function MemoryHighlight({ section }) {
  return (
    <SectionContainer className="pt-0">
      <div
        className="surface-card px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(186, 33, 29, 0.08), rgba(255, 255, 255, 0.9))",
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <ContentBlock
            eyebrow={section.eyebrow}
            title={section.title}
            paragraphs={section.description}
            className="max-w-2xl"
          />
          <div>
            <PrimaryButton href={section.cta.href}>{section.cta.label}</PrimaryButton>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border border-white/70 bg-white/70 px-5 py-5 shadow-[0_24px_48px_-40px_rgba(29,25,21,0.28)] backdrop-blur sm:px-6"
            >
              <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
                {item.label}
              </p>
              <h3 className="mt-4 text-3xl leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
