import { intro, site, socials } from "@/lib/content";
import RichText from "./RichText";

export default function Sidebar() {
  return (
    <aside className="flex min-h-0 flex-1 flex-col lg:pr-16">
      {/* Intro block — vertically centered between nav and socials */}
      <div className="flex flex-1 flex-col justify-center py-8">
        <h1 className="text-[28px] leading-snug font-normal text-balance sm:text-[32px]">
          {intro.headingLead}
          <span className="text-accent">{intro.headingName}</span>
          {intro.headingRest}
        </h1>

        <div className="mt-10 flex w-full gap-4">
          <span
            aria-hidden="true"
            className="w-px shrink-0 self-stretch bg-border"
          />
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
          className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-button px-6 py-2 text-button-contrast transition-transform hover:-translate-y-0.5"
        >
          Get in touch
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              d="M25 8V21C25 21.2652 24.8946 21.5196 24.7071 21.7071C24.5196 21.8946 24.2652 22 24 22C23.7348 22 23.4804 21.8946 23.2929 21.7071C23.1054 21.5196 23 21.2652 23 21V10.4137L8.7075 24.7075C8.51986 24.8951 8.26536 25.0006 8 25.0006C7.73464 25.0006 7.48014 24.8951 7.2925 24.7075C7.10486 24.5199 6.99944 24.2654 6.99944 24C6.99944 23.7346 7.10486 23.4801 7.2925 23.2925L21.5863 9H11C10.7348 9 10.4804 8.89464 10.2929 8.70711C10.1054 8.51957 10 8.26522 10 8C10 7.73478 10.1054 7.48043 10.2929 7.29289C10.4804 7.10536 10.7348 7 11 7H24C24.2652 7 24.5196 7.10536 24.7071 7.29289C24.8946 7.48043 25 7.73478 25 8Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <nav className="flex items-center gap-2.5 pb-1" aria-label="Social">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="inline-flex h-8 w-8 items-center justify-center transition-transform hover:-translate-y-0.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.icon}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </a>
        ))}
      </nav>
    </aside>
  );
}
