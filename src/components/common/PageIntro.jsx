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
        "surface-card relative isolate px-5 py-8 sm:px-8 sm:py-12 lg:px-10 xl:px-12",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-accent/15 blur-3xl sm:-right-12 sm:h-40 sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl sm:h-32 sm:w-32"
      />

      <div className="relative flex max-w-3xl flex-col gap-5 sm:gap-6">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

        <div className="space-y-3 sm:space-y-4">
          <h1 className="max-w-5xl text-[2.8rem] leading-[0.94] sm:text-[3.9rem] lg:text-[4.4rem] xl:text-[4.8rem]">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8">
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
