import { site, timeline } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border bg-surface/40 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Design that respects people's time"
          />
          <Reveal delay={80}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m {site.name.split(" ")[0]}, a designer based in{" "}
                {site.location}. For the last decade I&apos;ve helped startups
                and product teams turn ambitious ideas into interfaces and
                brands that feel effortless to use.
              </p>
              <p>
                I care about the details most people never notice — the tempo of
                a transition, the honesty of an empty state, the confidence of a
                good default. I work closely with engineers, so the work I hand
                off is built to ship, not just to admire.
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
              Experience
            </h3>
          </Reveal>
          <ol className="mt-6 space-y-8">
            {timeline.map((entry, i) => (
              <Reveal as="li" key={entry.period} delay={i * 80}>
                <div className="relative border-l border-border pl-6">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {entry.period}
                  </p>
                  <p className="mt-1 text-lg font-medium text-foreground">
                    {entry.role}{" "}
                    <span className="text-muted">· {entry.org}</span>
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-muted">
                    {entry.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
