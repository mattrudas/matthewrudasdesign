"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { HoverCard } from "@/lib/content";

type HoverTermProps = {
  label: string;
  href: string;
  card: HoverCard;
};

/**
 * Inline term with the accent underline animation plus a floating preview
 * card that gently fades/slides in on hover (or keyboard focus).
 */
export default function HoverTerm({ label, href, card }: HoverTermProps) {
  const [open, setOpen] = useState(false);
  const [embedReady, setEmbedReady] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardId = useId();
  const external = href.startsWith("http");
  const hasEmbed = Boolean(card.embedUrl);

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const show = () => {
    clearClose();
    setOpen(true);
  };

  const hide = () => {
    clearClose();
    // Small delay so the cursor can move onto the card without flicker.
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearClose(), []);

  return (
    <span
      className="hover-term relative inline"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className="hover-accent-link font-semibold"
        aria-describedby={open ? cardId : undefined}
      >
        {label}
      </a>

      <span
        id={cardId}
        role="tooltip"
        aria-hidden={!open}
        className={`hover-preview ${open ? "is-open" : ""}`}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <span
          className={`hover-preview__media${hasEmbed ? " hover-preview__media--embed" : ""}`}
        >
          {/* Static cover stays as fallback while the live embed loads. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt=""
            className={
              card.imageFit === "contain"
                ? "h-full w-full object-contain"
                : "h-full w-full object-cover object-[center_35%]"
            }
            style={
              hasEmbed && embedReady
                ? { opacity: 0, position: "absolute", inset: 0 }
                : undefined
            }
          />
          {hasEmbed && open ? (
            <iframe
              src={card.embedUrl}
              title={`${label} website preview`}
              loading="lazy"
              tabIndex={-1}
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="no-referrer"
              className="hover-preview__iframe"
              onLoad={() => setEmbedReady(true)}
            />
          ) : null}
        </span>
        <span className="hover-preview__footer">
          <span className="hover-preview__caption">{card.caption}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.badge} alt="" className="hover-preview__badge" />
        </span>
      </span>
    </span>
  );
}
