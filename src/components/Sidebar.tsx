import { intro, nav, site } from "@/lib/content";
import RichText from "./RichText";

export default function Sidebar() {
  return (
    <aside className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:py-[72px]">
      {/* Top: nav + avatar */}
      <div>
        <nav className="flex items-center gap-10 sm:gap-20" id="about">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.avatar}
            alt={site.name}
            width={120}
            height={120}
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Bottom: intro + CTA */}
      <div className="mt-12 max-w-[660px] lg:mt-auto">
        <h1 className="text-[28px] leading-snug font-normal text-balance sm:text-[32px]">
          {intro.headingLead}
          <span className="text-accent">{intro.headingName}</span>
          {intro.headingRest}
        </h1>

        <div className="mt-10 flex max-w-[660px] gap-4">
          <span aria-hidden="true" className="w-px shrink-0 self-stretch bg-border" />
          <div className="space-y-3 text-muted-strong">
            {intro.paragraphs.map((paragraph, i) => (
              <p key={i}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </div>

        <a
          id="contact"
          href={`mailto:${site.email}`}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-button px-6 py-2 text-button-contrast transition-transform hover:-translate-y-0.5"
        >
          Talk to me
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/arrow-right.svg" alt="" aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </aside>
  );
}
