import { intro, nav, site } from "@/lib/content";
import RichText from "./RichText";

export default function Sidebar() {
  return (
    <aside className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:py-10">
      {/* Top: nav + avatar */}
      <div>
        <nav className="flex items-center gap-6" id="about">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-strong transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          {site.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={site.avatar}
              alt={site.name}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_25%,#c7d6a8,#5f8a52_55%,#3f5f37)]"
            />
          )}
        </div>
      </div>

      {/* Bottom: intro + CTA */}
      <div className="mt-10 lg:mt-auto lg:max-w-sm">
        <h1 className="text-xl leading-snug text-foreground text-balance sm:text-2xl">
          {intro.headingLead}
          <a
            href={site.nameLink}
            target={site.nameLink.startsWith("http") ? "_blank" : undefined}
            rel={
              site.nameLink.startsWith("http")
                ? "noreferrer noopener"
                : undefined
            }
            className="text-accent underline-offset-4 hover:underline"
          >
            {site.name}
          </a>
          {intro.headingAfterName}
          <span className="font-semibold">{intro.headingCompanyBold}</span>
          {intro.headingEnd}
        </h1>

        <div className="mt-6 space-y-4 text-muted-strong">
          {intro.paragraphs.map((paragraph, i) => (
            <p key={i}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <a
          id="contact"
          href={`mailto:${site.email}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-button px-5 py-2.5 text-button-contrast transition-transform hover:-translate-y-0.5"
        >
          Talk to me
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
