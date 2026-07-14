import type { Project } from "@/lib/content";
import ProjectMock from "./ProjectMock";
import Reveal from "./Reveal";

const aspectByKind: Record<Project["kind"], string> = {
  phones: "aspect-[16/8]",
  extension: "aspect-[16/10]",
  grid: "aspect-[16/9]",
  browser: "aspect-[16/9]",
  brand: "aspect-[16/7]",
  shop: "aspect-[16/9]",
};

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <Reveal as="article">
      <div
        className={`w-full overflow-hidden rounded-xl bg-surface ${aspectByKind[project.kind]}`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <ProjectMock kind={project.kind} />
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h2 className="font-semibold text-foreground">{project.title}</h2>
        <span className="shrink-0 text-muted">{project.period}</span>
      </div>
      <p className="mt-1 text-muted">{project.tags}</p>
      <p className="mt-3 max-w-2xl text-muted-strong">{project.description}</p>
    </Reveal>
  );
}
