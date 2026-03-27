import { cn } from "@/lib/utils";

export default function SiteFrame({ className, children }) {
  return (
    <div className={cn("site-container relative flex min-h-screen flex-col", className)}>
      <div aria-hidden="true" className="fine-rule mt-5" />
      <div className="flex-1">{children}</div>
      <div aria-hidden="true" className="fine-rule mb-5 opacity-70" />
    </div>
  );
}
