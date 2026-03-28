import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/common/PrimaryButton";
import MobileNav from "@/components/layout/MobileNav";
import NavLink from "@/components/layout/NavLink";
import { contactLink, primaryNavigation } from "@/data/navigation";
import site from "@/data/site";

const desktopNavigation = primaryNavigation.filter(
  (item) => item.href !== contactLink.href,
);

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/88 shadow-[0_18px_42px_-42px_rgba(29,25,21,0.45)] backdrop-blur">
      <div className="site-container">
        <div className="flex min-h-[4.25rem] items-center gap-3 py-2.5 sm:min-h-20 sm:gap-4 sm:py-3">
          <Link
            href="/"
            className="min-w-0 max-w-[calc(100vw-6.5rem)] rounded-2xl px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green sm:max-w-none"
          >
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.22em] text-secondary sm:text-[0.7rem] sm:tracking-[0.28em]">
              {site.brandLabel}
            </span>
            <Image
              src="/images/assokreyol/logo-assokreyol.png"
              alt={`Logo de ${site.name}`}
              width={1024}
              height={1024}
              loading="eager"
              sizes="(max-width: 639px) 80px, 96px"
              className="mt-1 h-11 w-auto mix-blend-multiply sm:h-14"
            />
          </Link>

          <div className="ml-auto hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end lg:gap-3">
            <nav aria-label="Navigation principale" className="min-w-0">
              <ul className="flex flex-wrap items-center justify-end gap-1">
                {desktopNavigation.map((item) => (
                  <li key={item.href}>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <PrimaryButton href={contactLink.href} className="min-h-11 px-5">
              {contactLink.label}
            </PrimaryButton>
          </div>

          <div className="ml-auto lg:hidden">
            <MobileNav />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pb-2 sm:gap-4 sm:pb-3">
          <p className="hidden max-w-xl text-sm leading-6 text-muted xl:block">
            {site.slogan}
          </p>
          <div aria-hidden="true" className="fine-rule flex-1" />
        </div>
      </div>
    </header>
  );
}
