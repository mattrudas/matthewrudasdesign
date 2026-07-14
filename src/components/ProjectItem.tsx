import type { Project } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <Reveal as="article">
      <div className="aspect-[788/364] w-full overflow-hidden rounded-2xl bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="px-4 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-base text-foreground">{project.title}</h2>
            <p className="text-sm text-tag">{project.tags}</p>
          </div>
          <span className="shrink-0 text-base text-muted">{project.period}</span>
        </div>

        <div className="mt-4 flex gap-2">
          <span aria-hidden="true" className="w-px shrink-0 self-stretch bg-border" />
          <p className="text-sm font-light text-description">{project.description}</p>
        </div>
      </div>
    </Reveal>
  );
}
