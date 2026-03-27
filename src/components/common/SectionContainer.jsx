import { cn } from "@/lib/utils";

export default function SectionContainer({
  as: Component = "section",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("section-space", className)} {...props}>
      {children}
    </Component>
  );
}
