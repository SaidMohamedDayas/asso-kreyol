import Image from "next/image";
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
        "grid auto-rows-[10rem] gap-3 sm:auto-rows-[12rem] sm:gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[10rem]",
        className
      )}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className={cn(
            "surface-card group relative isolate flex h-full flex-col justify-between px-4 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_64px_-42px_rgba(29,25,21,0.28)] sm:px-5 sm:py-5",
            sizeClasses[item.size] || ""
          )}
        >
          {item.imageSrc ? (
            <>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt || ""}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                className={cn(
                  "transition-transform duration-500 group-hover:scale-[1.03]",
                  item.imageFit === "contain" ? "object-contain p-5" : "object-cover"
                )}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,249,246,0.12),rgba(251,249,246,0.76))]"
              />
            </>
          ) : (
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]",
                toneClasses[item.tone] || toneClasses.paper
              )}
            />
          )}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/78 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute left-4 top-4 h-14 w-14 rounded-full border border-white/80 bg-white/42 sm:left-5 sm:top-5 sm:h-16 sm:w-16"
          />

          <div className="relative flex h-full flex-col justify-between gap-5 sm:gap-6">
            <span className="inline-flex w-fit rounded-full border border-white/80 bg-white/70 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-secondary sm:px-3 sm:text-[0.68rem] sm:tracking-[0.2em]">
              {item.tag || "TODO"}
            </span>

            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-secondary uppercase sm:text-sm sm:tracking-[0.22em]">
                {item.eyebrow || "Temps fort"}
              </p>
              <h3 className="mt-3 text-[1.75rem] leading-tight sm:text-3xl">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted sm:leading-7">
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
