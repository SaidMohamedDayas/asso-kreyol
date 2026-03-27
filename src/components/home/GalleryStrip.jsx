import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";

const sizeClasses = {
  feature: "xl:col-span-2 xl:row-span-2",
  wide: "xl:col-span-2",
  tall: "xl:row-span-2",
  square: "",
};

const toneClasses = {
  primary:
    "bg-[linear-gradient(135deg,rgba(186,33,29,0.18),rgba(255,255,255,0.9))]",
  accent:
    "bg-[linear-gradient(135deg,rgba(238,180,39,0.18),rgba(255,255,255,0.92))]",
  green:
    "bg-[linear-gradient(135deg,rgba(49,97,42,0.16),rgba(255,255,255,0.92))]",
  secondary:
    "bg-[linear-gradient(135deg,rgba(125,81,42,0.18),rgba(255,255,255,0.92))]",
  paper:
    "bg-[linear-gradient(135deg,rgba(242,238,232,0.95),rgba(255,255,255,0.9))]",
};

export default function GalleryStrip({ gallery }) {
  return (
    <SectionContainer className="pt-2 sm:pt-6">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <ContentBlock
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          paragraphs={gallery.description}
          className="max-w-2xl"
        />
        <div className="rounded-[1.5rem] border border-white/75 bg-white/66 px-5 py-5 shadow-[0_20px_44px_-36px_rgba(29,25,21,0.22)] sm:justify-self-end sm:rounded-[1.6rem] sm:px-6">
          <p className="max-w-lg text-sm leading-7 text-muted sm:text-base">
            {gallery.note}
          </p>
        </div>
      </div>

      <div className="mt-10 grid auto-rows-[12rem] gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[10rem]">
        {gallery.items.map((item) => (
          <article
            key={item.title}
            className={`surface-card group relative isolate flex h-full flex-col justify-between px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_-42px_rgba(29,25,21,0.3)] ${sizeClasses[item.size] || ""}`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03] ${toneClasses[item.tone] || toneClasses.paper}`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/78 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/80 bg-white/42"
            />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <span className="inline-flex w-fit rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-secondary">
                TODO
              </span>

              <div>
                <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-secondary uppercase sm:text-sm sm:tracking-[0.22em]">
                Temps fort
              </p>
                <h3 className="mt-3 text-[1.75rem] leading-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted sm:leading-7">
                {item.description}
              </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
