import { Fragment } from "react";
import { hoverCards } from "@/lib/content";
import HoverTerm from "./HoverTerm";

/**
 * Renders a string with inline `**bold**` and `[label](url)` markup.
 * Labels present in `hoverCards` get a gentle underline + floating preview.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const card = hoverCards[label];

          if (card) {
            return (
              <HoverTerm key={i} label={label} href={href} card={card} />
            );
          }

          const external = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className="font-medium underline-offset-4 hover:underline"
            >
              {label}
            </a>
          );
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
