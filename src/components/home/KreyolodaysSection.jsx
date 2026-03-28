import Image from "next/image";
import ContentBlock from "@/components/common/ContentBlock";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/shared/Reveal";

export default function KreyolodaysSection({ section }) {
  const [featuredItem, ...otherItems] = section.items;
  const toneClasses = [
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.7))]",
    "bg-[linear-gradient(180deg,rgba(238,180,39,0.12),rgba(255,255,255,0.78))]",
    "bg-[linear-gradient(180deg,rgba(49,97,42,0.1),rgba(255,255,255,0.8))]",
  ];

  return (
    <SectionContainer className="pt-2 sm:pt-6">
      <div
        className="surface-card relative isolate px-5 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 180, 39, 0.12), rgba(255, 255, 255, 0.92))",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-0 h-56 w-56 rounded-full bg-accent/14 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-green/10 blur-3xl"
        />

        <div className="relative grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:items-stretch">
          <Reveal variant="softScale">
            <article className="rounded-[1.8rem] border border-white/80 bg-[linear-gradient(155deg,rgba(255,255,255,0.72),rgba(255,255,255,0.56))] p-5 shadow-[0_26px_58px_-42px_rgba(29,25,21,0.28)] sm:rounded-[2rem] sm:p-8">
            {featuredItem.imageSrc ? (
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/68">
                <Image
                  src={featuredItem.imageSrc}
                  alt={featuredItem.imageAlt || ""}
                  fill
                  sizes="(max-width: 1279px) 100vw, 52vw"
                  className={
                    featuredItem.imageFit === "contain" ? "object-contain p-4" : "object-cover"
                  }
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,249,246,0.08),rgba(251,249,246,0.02))]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/48 to-transparent"
                />
              </div>
            ) : null}
            <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
              Activité
            </p>
            <h3 className="mt-5 max-w-lg text-[2rem] sm:mt-6 sm:text-[2.35rem] xl:text-[2.8rem]">
              {featuredItem.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8">
              {featuredItem.description}
            </p>
            <div className="fine-rule mt-6 max-w-xs" />
            </article>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <div className="flex h-full flex-col gap-6 rounded-[1.7rem] border border-white/75 bg-white/62 p-5 sm:rounded-[1.9rem] sm:p-8">
              <ContentBlock
                eyebrow={section.eyebrow}
                title={section.title}
                paragraphs={section.description}
                className="max-w-none"
              />
              <div className="fine-rule" />
              <SecondaryButton href={section.cta.href} className="w-full self-start sm:w-auto">
                {section.cta.label}
              </SecondaryButton>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
          {otherItems.map((item, index) => (
            <Reveal key={item.title} delay={0.12 + index * 0.06} className="h-full">
              <article
                className={`interactive-card rounded-[1.6rem] border border-white/75 px-5 py-5 shadow-[0_24px_48px_-40px_rgba(29,25,21,0.22)] backdrop-blur sm:px-6 sm:py-6 ${toneClasses[index % toneClasses.length]}`}
              >
                {item.imageSrc ? (
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/68">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt || ""}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 20vw"
                      className={item.imageFit === "contain" ? "object-contain p-3" : "object-cover"}
                    />
                  </div>
                ) : null}
                <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
                  Activité
                </p>
                <h3 className="mt-4 text-[1.8rem] leading-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
