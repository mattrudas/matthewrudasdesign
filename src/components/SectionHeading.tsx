import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
