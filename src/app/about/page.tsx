import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import AboutLetter from "@/components/AboutLetter";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — designer.`,
};

export default function AboutPage() {
  return (
    <div className="relative min-h-dvh bg-background">
      {/* Nav overlays the page so content can center on the full viewport */}
      <div className="absolute inset-x-0 top-0 z-10 px-6">
        <SiteHeader pathname="/about" />
      </div>

      {/* Desktop: contained to the screen height; the letter scrolls inside its card (same as the home work panel) */}
      <div className="flex min-h-dvh items-center justify-center px-4 py-6 sm:px-6 lg:h-dvh lg:min-h-0 lg:py-3">
        <div className="flex w-full max-w-[800px] flex-col gap-3 lg:h-full">
          <article className="w-full rounded-[20px] bg-card p-6 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain">
            <AboutLetter />
          </article>

          {/* Photo strip (about.photos) hidden for now */}
        </div>
      </div>
    </div>
  );
}
