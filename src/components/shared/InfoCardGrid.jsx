import Link from "next/link";
import { cn, isExternalHref } from "@/lib/utils";

const toneClasses = {
  primary:
    "bg-[linear-gradient(180deg,rgba(186,33,29,0.07),rgba(255,255,255,0.78))]",
  accent:
    "bg-[linear-gradient(180deg,rgba(238,180,39,0.1),rgba(255,255,255,0.8))]",
  green:
    "bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.8))]",
  secondary:
    "bg-[linear-gradient(180deg,rgba(125,81,42,0.08),rgba(255,255,255,0.82))]",
  paper:
    "bg-[linear-gradient(180deg,rgba(242,238,232,0.7),rgba(255,255,255,0.82))]",
};

function CardBody({ item, index }) {
  const label =
    item.eyebrow || item.label || item.category || String(index + 1).padStart(2, "0");

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-secondary uppercase sm:text-sm sm:tracking-[0.24em]">
          {label}
        </p>
        {item.meta ? (
          <span className="rounded-full border border-white/80 bg-white/76 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-secondary sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
            {item.meta}
          </span>
        ) : null}
      </div>

      <div className="space-y-4">
        <h3 className="text-[1.85rem] leading-tight sm:text-3xl">{item.title}</h3>
        {item.description ? (
          <p className="text-sm leading-7 text-muted sm:text-base">{item.description}</p>
        ) : null}
        {item.note ? (
          <p className="text-sm leading-7 text-secondary/90">{item.note}</p>
        ) : null}
      </div>

      {item.footer ? (
        <p className="mt-auto text-sm font-semibold text-foreground">{item.footer}</p>
      ) : (
        <span className="mt-auto" />
      )}
    </>
  );
}

export default function InfoCardGrid({
  items,
  columns = "md:grid-cols-2 xl:grid-cols-4",
  className,
  cardClassName,
}) {
  return (
    <div className={cn("grid gap-4", columns, className)}>
      {items.map((item, index) => {
        const hasLink = item.href && item.href !== "TODO";
        const classes = cn(
          "surface-card group relative isolate flex min-h-[14.5rem] h-full flex-col gap-4 px-5 py-5 sm:min-h-[16rem] sm:gap-5 sm:px-7 sm:py-7",
          toneClasses[item.tone] || "",
          hasLink
            ? "interactive-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-40px_rgba(29,25,21,0.28)]"
            : "",
          cardClassName
        );

        const content = (
          <>
            <div
              aria-hidden="true"
              className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/80 bg-white/42 sm:right-5 sm:top-5 sm:h-16 sm:w-16"
            />
            <div className="relative flex h-full flex-col gap-5">
              <CardBody item={item} index={index} />
            </div>
          </>
        );

        if (hasLink && isExternalHref(item.href)) {
          return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={classes}
            >
              {content}
            </a>
          );
        }

        if (hasLink) {
          return (
            <Link key={item.title} href={item.href} className={classes}>
              {content}
            </Link>
          );
        }

        return (
          <article key={item.title} className={classes}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
