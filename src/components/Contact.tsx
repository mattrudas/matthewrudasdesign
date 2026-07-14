import { site } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-wider text-accent">
            <span className="h-px w-8 bg-accent" />
            Contact
            <span className="h-px w-8 bg-accent" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-7xl">
            Have a project in mind?
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m currently taking on a small number of new projects. Tell me
            what you&apos;re building and let&apos;s see if we&apos;re a fit.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              {site.email}
            </a>
            {site.resumeUrl && site.resumeUrl !== "#" && (
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Download résumé
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
