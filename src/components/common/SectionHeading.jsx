import { cn } from "@/lib/utils";

export default function SectionHeading({
  as: Component = "h2",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("section-heading", className)} {...props}>
      {children}
    </Component>
  );
}
