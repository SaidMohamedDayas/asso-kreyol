import Link from "next/link";
import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";

export default function AxisCards({ axes }) {
  return (
    <SectionContainer id="axes" className="pt-0">
      <ContentBlock
        eyebrow={axes.eyebrow}
        title={axes.title}
        paragraphs={axes.description}
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {axes.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="surface-card group flex h-full flex-col gap-6 px-6 py-6 transition-transform duration-200 hover:-translate-y-1 sm:px-7 sm:py-7"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold tracking-[0.24em] text-secondary uppercase">
                {item.label}
              </p>
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/90 bg-white/65 text-lg text-secondary transition-colors group-hover:text-foreground"
              >
                ↗
              </span>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl leading-tight">{item.title}</h3>
              <p className="text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>
            </div>
            <p className="mt-auto text-sm font-semibold text-foreground">
              Découvrir l’axe
            </p>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
