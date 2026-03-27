import ContentBlock from "@/components/common/ContentBlock";
import SectionContainer from "@/components/common/SectionContainer";
import { isExternalHref } from "@/lib/utils";

function SocialCard({ item }) {
  const classes =
    "surface-card flex h-full flex-col gap-4 px-6 py-6 sm:px-7 sm:py-7";

  const content = (
    <>
      <p className="text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
        {item.platform}
      </p>
      <h3 className="text-3xl leading-tight">{item.platform}</h3>
      <p className="text-sm leading-7 text-muted sm:text-base">{item.description}</p>
      <p className="mt-auto text-sm font-semibold text-foreground">
        {isExternalHref(item.href) ? "Ouvrir le lien" : item.href}
      </p>
    </>
  );

  if (isExternalHref(item.href)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${classes} transition-transform duration-200 hover:-translate-y-1`}
      >
        {content}
      </a>
    );
  }

  return <article className={classes}>{content}</article>;
}

export default function SocialShowcase({ social }) {
  return (
    <SectionContainer className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
        <ContentBlock
          eyebrow={social.eyebrow}
          title={social.title}
          paragraphs={social.description}
          className="max-w-2xl"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {social.items.map((item) => (
            <SocialCard key={item.platform} item={item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
