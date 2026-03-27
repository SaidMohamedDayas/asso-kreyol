import { cn } from "@/lib/utils";

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

export default function VisualMosaic({ items, className }) {
  return (
    <div
      className={cn(
        "grid auto-rows-[12rem] gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[10rem]",
        className
      )}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className={cn(
            "surface-card group relative isolate flex h-full flex-col justify-between px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_-42px_rgba(29,25,21,0.28)]",
            sizeClasses[item.size] || ""
          )}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]",
              toneClasses[item.tone] || toneClasses.paper
            )}
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
              {item.tag || "TODO"}
            </span>

            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
                {item.eyebrow || "Temps fort"}
              </p>
              <h3 className="mt-3 text-3xl leading-tight">{item.title}</h3>
              {item.description ? (
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
