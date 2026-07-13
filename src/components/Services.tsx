import { services } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="Flexible engagements — from a focused sprint to an ongoing design partnership."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              as="article"
              key={service.title}
              delay={(i % 2) * 80}
              className="group bg-surface p-8 transition-colors hover:bg-background"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 pl-9 text-base leading-relaxed text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
