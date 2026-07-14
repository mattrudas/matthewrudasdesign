import { clients } from "@/lib/content";

export default function Marquee() {
  const items = [...clients, ...clients];

  return (
    <section
      aria-label="Selected clients"
      className="border-y border-border bg-surface/40 py-6"
    >
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {items.map((client, i) => (
            <li
              key={`${client}-${i}`}
              className="font-display text-2xl text-muted/70 whitespace-nowrap"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
