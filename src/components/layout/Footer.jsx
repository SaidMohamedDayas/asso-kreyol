import Link from "next/link";
import { footerGroups } from "@/data/navigation";
import site from "@/data/site";
import { isExternalHref } from "@/lib/utils";

const socialEntries = Object.entries(site.socialLinks || {});

function formatNetworkLabel(network) {
  return network.charAt(0).toUpperCase() + network.slice(1);
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-6 pt-10 sm:pb-8 sm:pt-14">
      <div className="site-container">
        <div aria-hidden="true" className="fine-rule" />

        <div className="grid gap-10 py-8 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] lg:gap-16 lg:py-10">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green"
            >
              <span className="block text-[0.7rem] font-bold uppercase tracking-[0.28em] text-secondary">
                Institution
              </span>
              <span className="mt-1 block font-serif text-[1.9rem] leading-none tracking-[-0.04em]">
                {site.name}
              </span>
            </Link>

            <p className="max-w-lg text-sm leading-7 text-muted">
              TODO - Une courte présentation institutionnelle de l’association
              viendra préciser sa mission, sa présence et ses actions.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="footer-link inline-flex items-center gap-2 text-sm font-semibold"
            >
              {site.email}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="footer-link text-sm leading-6">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/80 pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {socialEntries.map(([network, value]) =>
              isExternalHref(value) ? (
                <a
                  key={network}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {formatNetworkLabel(network)}
                </a>
              ) : (
                <span key={network} className="text-sm text-muted">
                  {formatNetworkLabel(network)} · {value}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
