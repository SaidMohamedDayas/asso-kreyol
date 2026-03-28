import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

export default function ContentBlock({
  eyebrow,
  title,
  paragraphs = [],
  className,
  titleAs = "h2",
  titleClassName,
  children,
}) {
  const items = Array.isArray(paragraphs) ? paragraphs : [paragraphs];

  return (
    <div className={cn("max-w-3xl space-y-4 sm:space-y-6", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? (
        <SectionHeading as={titleAs} className={cn("max-w-none", titleClassName)}>
          {title}
        </SectionHeading>
      ) : null}

      {items.length ? (
        <div className="max-w-[66ch] space-y-4 text-[0.98rem] leading-7 text-muted sm:text-lg sm:leading-8">
          {items.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {children}
    </div>
  );
}
