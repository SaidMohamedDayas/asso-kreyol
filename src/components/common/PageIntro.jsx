import { cn } from "@/lib/utils";

export default function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  className,
}) {
  return (
    <header
      className={cn(
        "surface-card relative isolate px-6 py-10 sm:px-10 sm:py-14 lg:px-12",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative flex max-w-3xl flex-col gap-6">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

        <div className="space-y-4">
          <h1 className="max-w-5xl text-5xl sm:text-6xl lg:text-[4.8rem]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        {actions ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}
