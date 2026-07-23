"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { HoverCard } from "@/lib/content";

type HoverTermProps = {
  label: string;
  href: string;
  card: HoverCard;
};

type FillBox = {
  top: number;
  left: number;
  width: number;
  height: number;
};

/**
 * Inline term with the accent underline animation plus a floating preview
 * card that gently fades/slides in on hover (or keyboard focus).
 *
 * Cards with `embedUrl` (Upperstudy) fill the available space above the
 * term — live site preview on top, caption footer just above the text.
 */
export default function HoverTerm({ label, href, card }: HoverTermProps) {
  const [open, setOpen] = useState(false);
  const [embedReady, setEmbedReady] = useState(false);
  const [fillBox, setFillBox] = useState<FillBox | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const termRef = useRef<HTMLSpanElement | null>(null);
  const cardId = useId();
  const external = href.startsWith("http");
  const hasEmbed = Boolean(card.embedUrl);

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const measureFill = () => {
    const term = termRef.current;
    if (!term || !hasEmbed) return;

    const termRect = term.getBoundingClientRect();
    const column = term.closest(".hover-anchor-column") as HTMLElement | null;
    const colRect = column?.getBoundingClientRect() ?? termRect;

    // Fill from near the top of the viewport down to just above the term.
    const top = 24;
    const bottom = termRect.top - 12;
    const height = Math.max(260, bottom - top);

    setFillBox({
      top,
      left: colRect.left,
      width: colRect.width,
      height,
    });
  };

  const show = () => {
    clearClose();
    if (hasEmbed) measureFill();
    setOpen(true);
  };

  const hide = () => {
    clearClose();
    // Small delay so the cursor can move onto the card without flicker.
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearClose(), []);

  useEffect(() => {
    if (!open || !hasEmbed) return;

    measureFill();
    const onResize = () => measureFill();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, hasEmbed]);

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
        id={cardId}
        role="tooltip"
        aria-hidden={!open}
        className={`hover-preview ${open ? "is-open" : ""} ${
          hasEmbed ? "hover-preview--fill" : ""
        }`}
        style={
          hasEmbed && fillBox
            ? {
                top: fillBox.top,
                left: fillBox.left,
                width: fillBox.width,
                height: fillBox.height,
              }
            : undefined
        }
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
