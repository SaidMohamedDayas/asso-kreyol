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
    <SectionContainer className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <ContentBlock
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          paragraphs={gallery.description}
          className="max-w-2xl"
        />
        <p className="max-w-lg text-sm leading-7 text-muted sm:justify-self-end sm:text-base">
          {gallery.note}
        </p>
      </div>

      <div className="mt-10 grid auto-rows-[12rem] gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[10rem]">
        {gallery.items.map((item) => (
          <article
            key={item.title}
            className={`surface-card relative flex h-full flex-col justify-end px-5 py-5 ${sizeClasses[item.size] || ""}`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 ${toneClasses[item.tone] || toneClasses.paper}`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent"
            />
            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
                Temps fort
              </p>
              <h3 className="mt-3 text-3xl leading-tight">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
