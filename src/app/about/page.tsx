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

      <div className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 sm:py-28">
        <article className="w-full max-w-[1200px] rounded-[12px] bg-white p-6">
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

          <hr className="mt-6 border-0 border-t border-border" />

          <p className="mt-6 text-sm font-medium text-accent">{about.date}</p>

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
