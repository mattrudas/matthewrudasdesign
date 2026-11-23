"use client";

import { useState } from "react";
import type { Project } from "@/lib/content";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import PrototypeModal from "./PrototypeModal";

export default function ProjectItem({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [protoOpen, setProtoOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Reveal as="article">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`View ${project.title} full size`}
        className="group relative block aspect-[788/364] w-full cursor-zoom-in overflow-hidden rounded-[12px] bg-surface text-left"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </button>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-base text-foreground">{project.title}</h2>
            <p className="text-sm text-tag">{project.tags}</p>
          </div>
          <span className="mr-4 shrink-0 text-base text-muted">{project.period}</span>
        </div>

        <div className="mt-4 flex gap-2">
          <span
            aria-hidden="true"
            className="w-px shrink-0 self-stretch bg-border"
          />
          <p className="text-sm font-light text-description">
            {project.description}
          </p>
        </div>

        {project.tryUrl || project.videoUrl ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tryUrl ? (
              <button
                type="button"
                onClick={() => setProtoOpen(true)}
                className="inline-flex items-center rounded-full bg-button px-4 py-1.5 text-sm text-button-contrast transition-opacity hover:opacity-85 active:opacity-70"
              >
                Try it out
              </button>
            ) : null}
            {project.videoUrl ? (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-surface active:opacity-70"
              >
                See how it works
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      {protoOpen && project.tryUrl ? (
        <PrototypeModal
          title={project.title}
          url={project.tryUrl}
          onClose={() => setProtoOpen(false)}
        />
      ) : null}

      {videoOpen && project.videoUrl ? (
        <PrototypeModal
          title={project.title}
          url={project.videoUrl}
          variant="media"
          onClose={() => setVideoOpen(false)}
        />
      ) : null}

      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        slides={[{ src: project.image, alt: project.title }]}
      />
    </Reveal>
  );
}
