"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const variantClasses = {
  desktop: "nav-link",
  mobile: "mobile-nav-link",
};

const activeVariantClasses = {
  desktop: "nav-link-active",
  mobile: "mobile-nav-link-active",
};

export default function NavLink({
  href,
  children,
  variant = "desktop",
  className,
  onClick,
  ...props
}) {
  const pathname = usePathname() || "/";
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        variantClasses[variant] || variantClasses.desktop,
        isActive && activeVariantClasses[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
}
