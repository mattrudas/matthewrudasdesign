import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import RichText from "@/components/RichText";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — designer.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-full bg-white px-6 pt-6 pb-20 lg:px-10">
      <SiteNav pathname="/about" />

      <article className="mx-auto mt-20 max-w-[36rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.avatar}
          alt={site.name}
          width={72}
          height={72}
          className="h-[72px] w-[72px] rounded-full object-cover"
        />

        <h1 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
          {site.name}
        </h1>
        <p className="mt-1 text-base text-muted-strong">{about.role}</p>

        <hr className="mt-8 border-0 border-t border-border" />

        <p className="mt-8 text-sm text-accent">{about.date}</p>

        <div className="mt-6 space-y-5 text-[15px] leading-7 text-foreground">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <p className="mt-10 text-[15px] text-foreground">{about.signOff}</p>
      </article>
    </div>
  );
}
