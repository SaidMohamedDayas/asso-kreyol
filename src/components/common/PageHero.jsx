import { cn } from "@/lib/utils";
import Reveal from "@/components/shared/Reveal";

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
        "surface-card relative isolate overflow-hidden px-5 py-8 sm:px-8 sm:py-11 lg:px-10 lg:py-12 xl:px-12",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-accent/12 blur-3xl sm:-right-16 sm:h-48 sm:w-48"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 rounded-full bg-primary/8 blur-3xl sm:h-36 sm:w-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-8 hidden h-24 w-24 rounded-[2rem] border border-secondary/10 bg-white/30 xl:block"
      />

      <Reveal
        variant="fadeUp"
        className={cn(
          "relative",
          alignment.copy
        )}
      >
        <div
          className={cn("flex flex-col gap-5 sm:gap-6", alignment.container)}
        >
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

          <div className="space-y-3 sm:space-y-4">
            <h1 className="max-w-[12ch] text-[2.55rem] leading-[0.93] sm:text-[3.45rem] lg:text-[4.05rem] xl:text-[4.28rem]">
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "max-w-[42rem] text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8",
                  alignment.description
                )}
              >
                {description}
              </p>
            ) : null}
          </div>

          <div className="fine-rule max-w-xl" />
        </div>
      </Reveal>
    </header>
  );
}
