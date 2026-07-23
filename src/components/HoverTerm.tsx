"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import type { HoverCard } from "@/lib/content";

type HoverTermProps = {
  label: string;
  href: string;
  card: HoverCard;
};

const VIEWPORT_PAD = 16;

/**
 * Inline term with the accent underline animation plus a floating preview
 * modal that gently fades/slides in on hover (or keyboard focus).
 * Horizontal position is clamped so the card never clips the viewport edge.
 */
export default function HoverTerm({ label, href, card }: HoverTermProps) {
  const [open, setOpen] = useState(false);
  const [embedReady, setEmbedReady] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const termRef = useRef<HTMLSpanElement | null>(null);
  const previewRef = useRef<HTMLSpanElement | null>(null);
  const cardId = useId();
  const external = href.startsWith("http");
  const hasEmbed = Boolean(card.embedUrl);

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const clampPosition = () => {
    const term = termRef.current;
    const preview = previewRef.current;
    if (!term || !preview) return;

    const termRect = term.getBoundingClientRect();
    const previewWidth = Math.min(
      preview.offsetWidth || 374,
      window.innerWidth * 0.78,
    );
    const centerX = termRect.left + termRect.width / 2;
    const idealLeft = centerX - previewWidth / 2;
    const minLeft = VIEWPORT_PAD;
    const maxLeft = window.innerWidth - VIEWPORT_PAD - previewWidth;
    const clampedLeft = Math.min(Math.max(idealLeft, minLeft), maxLeft);

    setShiftX(clampedLeft - idealLeft);
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

  useEffect(() => {
    if (!open) return;

    // Measure after paint so offsetWidth is accurate.
    const id = requestAnimationFrame(() => clampPosition());
    const onReposition = () => clampPosition();
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [open]);

  return (
    <span
      ref={termRef}
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
        ref={previewRef}
        id={cardId}
        role="tooltip"
        aria-hidden={!open}
        className={`hover-preview ${open ? "is-open" : ""}`}
        style={{ "--hover-shift": `${shiftX}px` } as CSSProperties}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        <span
          className={`hover-preview__media${
            hasEmbed ? " hover-preview__media--embed" : ""
          }`}
        >
          {/* Static cover stays as fallback while the live embed loads. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt=""
            className={
              card.imageFit === "contain"
                ? "h-full w-full object-contain"
                : "h-full w-full object-cover"
            }
            style={{
              objectPosition: card.imagePosition ?? "center center",
              ...(hasEmbed && embedReady
                ? { opacity: 0, position: "absolute", inset: 0 }
                : {}),
            }}
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
