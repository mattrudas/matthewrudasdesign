"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

export type LightboxSlide = {
  src: string;
  alt: string;
};

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  /** One or more slides — ready for a future slideshow. */
  slides: LightboxSlide[];
  /** Which slide to show when opened. */
  initialIndex?: number;
};

const EXIT_MS = 200;

/**
 * Full-screen image viewer with a frosted glass overlay.
 * Structured around a slides array so next/prev can be added later.
 */
export default function Lightbox({
  open,
  onClose,
  slides,
  initialIndex = 0,
}: LightboxProps) {
  const titleId = useId();
  const [index, setIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const [present, setPresent] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const slide = slides[index] ?? slides[0];
  const slideSrc = slide?.src;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mount the portal when opened; keep it at opacity 0 until the enter effect runs.
  useEffect(() => {
    if (!open) return;

    setIndex(initialIndex);
    setClosing(false);
    setVisible(false);
    setPresent(true);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open, initialIndex]);

  // After paint (+ image decode), fade in so the browser never skips the dissolve.
  useEffect(() => {
    if (!present || !open || visible || closing || !slideSrc) return;

    let cancelled = false;

    const startFade = () => {
      if (cancelled) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) setVisible(true);
        });
      });
    };

    const img = new Image();
    img.src = slideSrc;

    const ready = () => {
      if (typeof img.decode === "function") {
        img.decode().then(startFade).catch(startFade);
      } else {
        startFade();
      }
    };

    if (img.complete) {
      ready();
    } else {
      img.addEventListener("load", ready, { once: true });
      img.addEventListener("error", startFade, { once: true });
    }

    return () => {
      cancelled = true;
    };
  }, [present, open, visible, closing, slideSrc]);

  const requestClose = () => {
    // Drop blur immediately via is-closing, then quick opacity fade.
    setClosing(true);
    setVisible(false);
    window.setTimeout(() => {
      setPresent(false);
      setClosing(false);
      onClose();
    }, EXIT_MS);
  };

  useEffect(() => {
    if (!present || closing) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setClosing(true);
      setVisible(false);
      window.setTimeout(() => {
        setPresent(false);
        setClosing(false);
        onClose();
      }, EXIT_MS);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [present, closing, onClose]);

  if (!mounted || !present || !slide) return null;

  return createPortal(
    <div
      className={`lightbox${visible ? " is-visible" : ""}${closing ? " is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="lightbox-backdrop"
        aria-label="Close image"
        onClick={requestClose}
      />

      <button
        type="button"
        className="lightbox-close"
        aria-label="Close"
        onClick={requestClose}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4.5 4.5L15.5 15.5M15.5 4.5L4.5 15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="lightbox-stage">
        <p id={titleId} className="sr-only">
          {slide.alt}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.src} alt={slide.alt} className="lightbox-image" />
      </div>
    </div>,
    document.body,
  );
}
