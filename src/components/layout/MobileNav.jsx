"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { mobileNavigationNote, primaryNavigation } from "@/data/navigation";
import NavLink from "@/components/layout/NavLink";

export default function MobileNav() {
  const [openPath, setOpenPath] = useState(null);
  const pathname = usePathname();
  const currentPathname = pathname || "/";
  const isOpen = openPath === currentPathname;
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
      }
      wasOpenRef.current = false;
      return undefined;
    }

    wasOpenRef.current = true;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector("a[href]")?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  return (
    <div className="relative z-40 lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        aria-label={isOpen ? "Fermer le menu principal" : "Ouvrir le menu principal"}
        onClick={() =>
          setOpenPath((value) => (value === currentPathname ? null : currentPathname))
        }
        className="inline-flex min-h-10 items-center gap-2.5 rounded-full border border-border/90 bg-white/78 px-3.5 py-2 text-sm font-semibold text-foreground shadow-[0_18px_44px_-34px_rgba(29,25,21,0.32)] backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green sm:min-h-11 sm:gap-3 sm:px-4"
      >
        <span className="text-[0.66rem] uppercase tracking-[0.22em] text-secondary sm:text-[0.72rem] sm:tracking-[0.26em]">
          Menu
        </span>
        <span aria-hidden="true" className="flex w-4 flex-col gap-1">
          <span
            className={`h-px w-full bg-foreground transition-transform ${
              isOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-foreground transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-foreground transition-transform ${
              isOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpenPath(null)}
            className="fixed inset-0 z-0 bg-foreground/8 backdrop-blur-[1px]"
          />

          <div
            id="mobile-navigation-panel"
            ref={panelRef}
            className="surface-card absolute right-0 top-full z-10 mt-2 w-[min(24rem,calc(100vw-1rem))] max-h-[calc(100vh-5.75rem)] overflow-y-auto p-3 sm:mt-3 sm:w-[min(24rem,calc(100vw-2rem))] sm:p-4"
          >
            <nav aria-label="Navigation mobile">
              <ul className="space-y-1.5 sm:space-y-2">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      variant="mobile"
                      onClick={() => setOpenPath(null)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="mt-4 px-2 text-[0.95rem] leading-6 text-muted">
              {mobileNavigationNote}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
