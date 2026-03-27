"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/data/navigation";
import NavLink from "@/components/layout/NavLink";

export default function MobileNav() {
  const [openPath, setOpenPath] = useState(null);
  const pathname = usePathname();
  const currentPathname = pathname || "/";
  const isOpen = openPath === currentPathname;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative z-40 lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() =>
          setOpenPath((value) => (value === currentPathname ? null : currentPathname))
        }
        className="inline-flex min-h-11 items-center gap-3 rounded-full border border-border/90 bg-white/75 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_18px_44px_-34px_rgba(29,25,21,0.32)] backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green"
      >
        <span className="text-[0.72rem] uppercase tracking-[0.26em] text-secondary">
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
            className="fixed inset-0 z-0 bg-foreground/5"
          />

          <div
            id="mobile-navigation-panel"
            className="surface-card absolute right-0 top-full z-10 mt-3 w-[min(26rem,calc(100vw-2rem))] p-4"
          >
            <nav aria-label="Navigation mobile">
              <ul className="space-y-2">
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

            <p className="mt-4 px-2 text-sm leading-6 text-muted">
              TODO - Le contenu détaillé de chaque rubrique sera ajouté dans les
              prochaines étapes.
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
