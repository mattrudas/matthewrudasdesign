import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import RichText from "@/components/RichText";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — designer.`,
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Same inset as home SiteHeader so the nav does not shift inward */}
      <div className="absolute inset-x-0 top-0 z-10 px-6">
        <SiteHeader pathname="/about" />
      </div>

      <div className="flex min-h-screen justify-center px-4 sm:px-6">
        <article className="flex min-h-screen w-full max-w-full flex-col bg-white px-6 pt-24 pb-16 sm:w-[800px] sm:px-8 sm:pt-28 sm:pb-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.aboutPortrait}
            alt={site.name}
            width={80}
            height={80}
            className="h-20 w-20 object-cover"
          />

          <h1 className="mt-6 text-sm font-medium tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="mt-1 text-sm text-[#656565]">{about.role}</p>

          <hr className="mt-4 border-0 border-t border-border" />

          <p className="mt-4 text-sm font-medium text-accent">{about.date}</p>

          <div className="mt-4 space-y-3 text-sm leading-relaxed font-light text-foreground">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>

          <p className="mt-3 text-sm text-[#656565]">{about.signOff}</p>
        </article>
      </div>
    </div>
  );
}
