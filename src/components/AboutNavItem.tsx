"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AboutLetter from "./AboutLetter";

/**
 * "About" in the top nav: opens the About letter in a pop-up over a dark
 * scrim instead of navigating to /about (which still works for direct links).
 */
export default function AboutNavItem({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`transition-colors hover:text-accent active:opacity-60 ${
          active || open ? "text-accent" : "text-foreground"
        }`}
      >
        {label}
      </button>

      {open
        ? createPortal(
            <div
              className="proto-scrim fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
              onClick={(e) => {
                if (e.target === e.currentTarget) setOpen(false);
              }}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label="About"
                className="proto-modal relative flex max-h-full w-full max-w-[800px] flex-col overflow-hidden rounded-[20px] bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  autoFocus
                  aria-label="Close"
                  className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-card transition-colors hover:bg-surface active:opacity-60"
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
                <article className="min-h-0 overflow-y-auto overscroll-contain p-6">
                  <AboutLetter />
                </article>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
