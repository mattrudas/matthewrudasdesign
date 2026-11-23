"use client";

import { useState } from "react";
import { companies, projects, type Company } from "@/lib/content";
import ProjectItem from "./ProjectItem";

/** Small company marks, drawn in currentColor so they follow the pill's text color. */
const LOGOS: Record<Company, React.ReactNode> = {
  // The "N" from the NOVA wordmark
  NOVA: (
    <svg width="13" height="14" viewBox="0 0 27.5 29.5" fill="currentColor" aria-hidden="true">
      <rect y="0.001" width="6.39979" height="29.4941" />
      <rect x="21.0777" width="6.39979" height="29.4941" />
      <path d="M6.33105 7.37352L6.33105 0L7.65275 0L13.7047 6.26054L13.7047 14.6775L6.33105 7.37352Z" />
      <path d="M21.1465 22.1216V29.4951H19.8248L13.7728 23.2346L13.7728 14.8176L21.1465 22.1216Z" />
    </svg>
  ),
  // Checkmate mark (public/hover/checkmate-logo.svg)
  Checkmate: (
    <svg width="20" height="10" viewBox="0 0 34 16" fill="currentColor" aria-hidden="true">
      <path d="M22.8032 0L10.3285 15.0695V5.68801H0V15.9975L13.0006 16C18.2094 16 22.5668 13.8123 25.695 10.0332L34 0.000839826L22.8032 0Z" />
    </svg>
  ),
};

/** Work list with NOVA / Checkmate pills. NOVA is selected by default. */
export default function WorkFeed() {
  const [active, setActive] = useState<Company>("NOVA");
  const visible = projects.filter((project) => project.company === active);

  return (
    <>
      {/* Pills stay pinned to the top of the work card while the list scrolls (desktop) */}
      <div className="mb-6 lg:sticky lg:top-0 lg:z-10 lg:mb-0 lg:bg-card lg:pt-3 lg:pb-6">
      <div role="group" aria-label="Filter work by company" className="flex h-12 items-center gap-2">
        {companies.map((company) => {
          const selected = company === active;
          return (
            <button
              key={company}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(company)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                selected
                  ? "border-button bg-button text-button-contrast"
                  : "border-border text-muted-strong hover:text-foreground"
              }`}
            >
              {LOGOS[company]}
              {company}
            </button>
          );
        })}
      </div>
      </div>

      <div className="space-y-8">
        {visible.map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
