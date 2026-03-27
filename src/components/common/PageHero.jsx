import { cn } from "@/lib/utils";

const alignments = {
  left: {
    container: "items-start text-left",
    copy: "max-w-3xl",
    description: "max-w-2xl",
  },
  center: {
    container: "items-center text-center",
    copy: "mx-auto max-w-4xl",
    description: "mx-auto max-w-2xl",
  },
};

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  const alignment = alignments[align] || alignments.left;

  return (
    <header
      className={cn(
        "surface-card relative isolate overflow-hidden px-6 py-10 sm:px-10 sm:py-14 lg:px-12",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-primary/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-8 hidden h-24 w-24 rounded-[2rem] border border-secondary/10 bg-white/30 lg:block"
      />

      <div className={cn("relative flex flex-col gap-6", alignment.container, alignment.copy)}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-[4.4rem]">{title}</h1>
          {description ? (
            <p
              className={cn(
                "text-base leading-8 text-muted sm:text-lg",
                alignment.description
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
