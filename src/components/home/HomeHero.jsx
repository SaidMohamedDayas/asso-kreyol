import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";

export default function HomeHero({ hero }) {
  return (
    <SectionContainer className="pt-10 sm:pt-16">
      <div className="surface-card relative isolate overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,33,29,0.1),transparent_26%),radial-gradient(circle_at_78%_24%,rgba(238,180,39,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(49,97,42,0.08),transparent_28%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="max-w-4xl text-5xl sm:text-6xl xl:text-[5.4rem]">
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

            <div className="fine-rule max-w-xl" />
          </div>

          <aside className="relative min-h-[21rem] rounded-[2rem] border border-white/75 bg-[linear-gradient(160deg,rgba(255,255,255,0.84),rgba(255,255,255,0.56))] p-5 shadow-[0_28px_64px_-42px_rgba(29,25,21,0.32)] sm:min-h-[24rem] sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-0 h-32 w-32 rounded-full bg-primary/12 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-accent/16 blur-3xl"
            />

            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_22px_48px_-36px_rgba(29,25,21,0.26)] sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                  {hero.visual.label}
                </p>
                <h2 className="mt-4 max-w-sm text-4xl sm:text-[2.7rem]">
                  {hero.visual.title}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
                  {hero.visual.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {hero.highlights.map((item) => (
                  <span
                    key={item.title}
                    className="inline-flex items-center rounded-full border border-white/80 bg-white/68 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_18px_34px_-28px_rgba(29,25,21,0.22)]"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="relative mt-6 grid gap-4 md:grid-cols-3">
          {hero.highlights.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border border-white/75 bg-white/66 px-5 py-5 shadow-[0_20px_44px_-36px_rgba(29,25,21,0.24)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:py-6"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                  {item.title}
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
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
