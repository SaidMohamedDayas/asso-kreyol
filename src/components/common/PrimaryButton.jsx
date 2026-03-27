import Link from "next/link";
import { cn, isExternalHref } from "@/lib/utils";

export default function PrimaryButton({
  href,
  className,
  children,
  ...props
}) {
  const classes = cn("button-primary", className);

  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
