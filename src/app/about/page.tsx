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
    <div className="flex h-dvh flex-col overflow-hidden bg-background">
      <div className="shrink-0 px-6">
        <SiteHeader pathname="/about" />
      </div>

      {/* Center letter + photos in the remaining viewport below the nav */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center px-4 py-4 sm:px-6">
          <div className="flex w-full max-w-[800px] flex-col gap-3">
            <article className="w-full rounded-[12px] bg-white p-6">
              <div className="flex items-center gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.aboutPortrait}
                  alt={site.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 object-cover"
                />
              <div className="flex flex-col gap-2 text-xs font-medium leading-[normal]">
                <h1 className="text-foreground">{site.name}</h1>
                <p className="text-[#656565]">{about.role}</p>
              </div>
            </div>

            <hr className="mt-4 border-0 border-t border-border" />

            <p className="mt-4 text-xs font-medium leading-[normal] text-accent">
              {about.date}
            </p>

            <div className="mt-4 space-y-3 text-xs font-light leading-[normal] text-foreground">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>

            <p className="mt-3 text-xs leading-[normal] text-[#656565]">
              {about.signOff}
            </p>
            </article>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.photos.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  width={191}
                  height={120}
                  className="h-[120px] w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
