import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/shared/Reveal";
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
    `surface-card interactive-card group relative isolate flex min-h-[15rem] h-full flex-col gap-4 px-5 py-5 sm:gap-5 sm:px-7 sm:py-7 ${meta.tone}`;

  const content = (
    <>
      <div
        aria-hidden="true"
        className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/78 bg-white/44 sm:right-5 sm:top-5 sm:h-16 sm:w-16"
      />
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/78 text-sm font-semibold tracking-[0.18em] text-secondary shadow-[0_14px_30px_-24px_rgba(29,25,21,0.18)]">
          {meta.badge}
        </span>
        <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-secondary uppercase sm:text-sm sm:tracking-[0.22em]">
          {item.platform}
        </p>
      </div>
      <h3 className="text-[1.8rem] leading-tight sm:text-3xl">{item.platform}</h3>
      <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">{item.description}</p>
      <div className="fine-rule mt-auto max-w-[9rem]" />
      <p className="text-sm font-semibold text-foreground">
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
        className={classes}
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
        <Reveal variant="fadeUp">
          <ContentBlock
            eyebrow={social.eyebrow}
            title={social.title}
            paragraphs={social.description}
            className="max-w-2xl"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {social.items.map((item, index) => (
            <Reveal key={item.platform} delay={index * 0.06} className="h-full">
              <SocialCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
