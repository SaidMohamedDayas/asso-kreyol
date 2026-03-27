import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const variantClasses = {
  default:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.74))]",
  memory:
    "bg-[linear-gradient(180deg,rgba(186,33,29,0.08),rgba(255,255,255,0.82))]",
  warm:
    "bg-[linear-gradient(180deg,rgba(238,180,39,0.12),rgba(255,255,255,0.82))]",
  green:
    "bg-[linear-gradient(180deg,rgba(49,97,42,0.08),rgba(255,255,255,0.82))]",
};

export default function PageCta({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  className,
}) {
  return (
    <aside
      className={cn(
        "surface-card relative isolate grid gap-5 px-5 py-5 sm:gap-6 sm:px-8 sm:py-7 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end",
        variantClasses[variant] || variantClasses.default,
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-primary/8 blur-3xl"
      />

      <div className="relative space-y-3">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <SectionHeading
          as="h2"
          className="max-w-none text-[2rem] sm:text-4xl xl:text-5xl"
        >
          {title}
        </SectionHeading>
        {description ? (
          <p className="max-w-2xl text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>

      <div className="relative flex flex-col gap-3 sm:flex-row xl:flex-col 2xl:flex-row">
        {primaryAction ? (
          <PrimaryButton href={primaryAction.href} className="w-full sm:w-auto">
            {primaryAction.label}
          </PrimaryButton>
        ) : null}
        {secondaryAction ? (
          <SecondaryButton href={secondaryAction.href} className="w-full sm:w-auto">
            {secondaryAction.label}
          </SecondaryButton>
        ) : null}
      </div>
    </aside>
  );
}
