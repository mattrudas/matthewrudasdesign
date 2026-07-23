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

const EXIT_MS = 280;

/**
 * Full-screen image viewer with a subtle dim overlay.
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

  const slide = slides[index] ?? slides[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setIndex(initialIndex);
    setPresent(true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const enter = requestAnimationFrame(() => setVisible(true));

    return () => {
      cancelAnimationFrame(enter);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, initialIndex]);

  const requestClose = () => {
    setVisible(false);
    window.setTimeout(() => {
      setPresent(false);
      onClose();
    }, EXIT_MS);
  };

  useEffect(() => {
    if (!present) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setVisible(false);
      window.setTimeout(() => {
        setPresent(false);
        onClose();
      }, EXIT_MS);
      // Slideshow hooks for later:
      // if (event.key === "ArrowRight") setIndex((i) => Math.min(i + 1, slides.length - 1));
      // if (event.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [present, onClose]);

  if (!mounted || !present || !slide) return null;

  return createPortal(
    <div
      className={`lightbox ${visible ? "is-visible" : ""}`}
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
