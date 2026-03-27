import { cn } from "@/lib/utils";

export default function SiteFrame({ className, children }) {
  return (
    <div className={cn("site-container relative flex flex-col", className)}>
      <div aria-hidden="true" className="fine-rule mt-4 opacity-70" />
      <div className="flex-1">{children}</div>
      <div aria-hidden="true" className="fine-rule mb-4 opacity-60" />
    </div>
  );
}
