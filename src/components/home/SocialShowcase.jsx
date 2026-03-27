import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";
import { isExternalHref } from "@/lib/utils";

const socialMeta = {
  Instagram: {
    badge: "IG",
    tone:
      "bg-[linear-gradient(180deg,rgba(186,33,29,0.08),rgba(255,255,255,0.78))]",
  },
  Facebook: {
    badge: "FB",
    tone:
      "bg-[linear-gradient(180deg,rgba(125,81,42,0.08),rgba(255,255,255,0.8))]",
  },
  YouTube: {
    badge: "YT",
    tone:
      "bg-[linear-gradient(180deg,rgba(238,180,39,0.1),rgba(255,255,255,0.8))]",
  },
};

function SocialCard({ item }) {
  const meta = socialMeta[item.platform] || {
    badge: "RS",
    tone: "bg-white/72",
  };
  const classes =
    `surface-card flex h-full flex-col gap-4 px-5 py-5 sm:gap-5 sm:px-7 sm:py-7 ${meta.tone}`;

  const content = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/78 text-sm font-semibold tracking-[0.18em] text-secondary shadow-[0_14px_30px_-24px_rgba(29,25,21,0.18)]">
          {meta.badge}
        </span>
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-secondary uppercase sm:text-sm sm:tracking-[0.22em]">
          {item.platform}
        </p>
      </div>
      <h3 className="text-[1.85rem] leading-tight sm:text-3xl">{item.platform}</h3>
      <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">{item.description}</p>
      <p className="mt-auto text-sm font-semibold text-foreground">
        {isExternalHref(item.href) ? "Ouvrir le lien" : "Lien TODO"}
      </p>
    </>
  );

  if (isExternalHref(item.href)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${classes} transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-40px_rgba(29,25,21,0.26)]`}
      >
        {content}
      </a>
    );
  }

  return <article className={classes}>{content}</article>;
}

export default function SocialShowcase({ social }) {
  return (
    <SectionContainer className="pt-2 sm:pt-6">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
        <ContentBlock
          eyebrow={social.eyebrow}
          title={social.title}
          paragraphs={social.description}
          className="max-w-2xl"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {social.items.map((item) => (
            <SocialCard key={item.platform} item={item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
