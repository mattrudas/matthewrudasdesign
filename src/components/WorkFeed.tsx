"use client";

import { useState } from "react";
import { companies, projects, type Company } from "@/lib/content";
import ProjectItem from "./ProjectItem";

/** Work list with NOVA / Checkmate pills. NOVA is selected by default. */
export default function WorkFeed() {
  const [active, setActive] = useState<Company>("NOVA");
  const visible = projects.filter((project) => project.company === active);

  return (
    <>
      <div role="group" aria-label="Filter work by company" className="mb-6 flex gap-2">
        {companies.map((company) => {
          const selected = company === active;
          return (
            <button
              key={company}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(company)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                selected
                  ? "border-button bg-button text-button-contrast"
                  : "border-border text-muted-strong hover:text-foreground"
              }`}
            >
              {company}
            </button>
          );
        })}
      </div>

      <div className="space-y-8">
        {visible.map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
