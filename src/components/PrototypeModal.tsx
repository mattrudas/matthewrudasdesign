"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";

type PrototypeModalProps = {
  title: string;
  url: string;
  onClose: () => void;
  /** "full" = near full screen (prototypes); "media" = narrow portrait (Instagram embeds). */
  variant?: "full" | "media";
};

/**
 * Modal that loads a live prototype (near full screen) or an embedded
 * video (narrow portrait) in an iframe, over a strong dark scrim.
 * Rendered only while open.
 */
export default function PrototypeModal({
  title,
  url,
  onClose,
  variant = "full",
}: PrototypeModalProps) {
  const titleId = useId();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="proto-scrim fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`proto-modal flex h-full w-full flex-col overflow-hidden rounded-[20px] bg-card shadow-2xl ${
          variant === "media" ? "max-h-[880px] max-w-[540px]" : ""
        }`}
      >
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border pr-2 pl-5">
          <h2 id={titleId} className="text-sm text-foreground">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close prototype"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-surface active:opacity-60"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M12 4L4 12M4 4l8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <iframe
          src={url}
          title={variant === "media" ? `${title} video` : `${title} prototype`}
          className="h-full w-full flex-1 border-0 bg-white"
        />
      </div>
    </div>,
    document.body,
  );
}
