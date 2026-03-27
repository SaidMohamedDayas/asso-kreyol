import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function HomeHero({ hero }) {
  return (
    <SectionContainer className="pt-8 sm:pt-12">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="surface-card relative isolate overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-accent/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative flex h-full flex-col gap-8">
            <div className="space-y-5">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-[4.9rem]">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </SecondaryButton>
            </div>
          </div>
        </div>

        <div className="surface-card relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(238,180,39,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(49,97,42,0.12),transparent_28%)]"
          />

          <div className="relative flex h-full flex-col gap-4">
            <div className="rounded-[1.8rem] border border-white/65 bg-white/70 p-5 shadow-[0_24px_54px_-36px_rgba(29,25,21,0.28)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                {hero.visual.label}
              </p>
              <h2 className="mt-4 max-w-sm text-4xl">{hero.visual.title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted sm:text-base">
                {hero.visual.description}
              </p>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              {hero.highlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[1.6rem] border border-white/70 bg-white/60 px-5 py-5 shadow-[0_20px_48px_-40px_rgba(29,25,21,0.24)] backdrop-blur ${
                    index === hero.highlights.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
