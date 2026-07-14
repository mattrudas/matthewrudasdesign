import type { ProjectKind } from "@/lib/content";

/**
 * Lightweight, CSS-only placeholder visuals that echo the design's mockups.
 * Swap in real exports by setting a project's `image` in content.ts.
 */
export default function ProjectMock({ kind }: { kind: ProjectKind }) {
  switch (kind) {
    case "phones":
      return <Phones />;
    case "extension":
      return <Extension />;
    case "grid":
      return <GridShots />;
    case "browser":
      return <Browser />;
    case "brand":
      return <Brand />;
    case "shop":
      return <Shop />;
    default:
      return null;
  }
}

function Phone() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[14px] bg-white shadow-sm ring-1 ring-black/5">
      <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-neutral-200" />
      <div className="flex-1 space-y-1.5 p-2.5">
        <div className="h-8 rounded-md bg-neutral-100" />
        <div className="h-2 w-3/4 rounded bg-neutral-100" />
        <div className="h-2 w-1/2 rounded bg-neutral-100" />
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="h-6 rounded bg-neutral-100" />
          <div className="h-6 rounded bg-neutral-100" />
          <div className="h-6 rounded bg-neutral-100" />
          <div className="h-6 rounded bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}

function Phones() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3 px-4 sm:gap-4 sm:px-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="aspect-[9/17] h-[82%]">
          <Phone />
        </div>
      ))}
    </div>
  );
}

function Extension() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-[260px] overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-semibold text-white">
            ✓
          </div>
          <div className="h-3 w-16 rounded bg-neutral-200" />
          <div className="ml-auto h-3 w-3 rounded-full bg-neutral-200" />
        </div>
        <div className="space-y-2 p-4">
          <div className="rounded-lg bg-[color-mix(in_srgb,var(--accent)_16%,white)] p-2.5">
            <div className="h-2.5 w-32 rounded bg-[color-mix(in_srgb,var(--accent)_45%,white)]" />
          </div>
          <div className="h-2.5 w-20 rounded bg-neutral-200" />
          <div className="flex items-center justify-between rounded-lg border border-dashed border-neutral-200 p-2.5">
            <div className="h-2.5 w-24 rounded bg-neutral-200" />
            <div className="h-3 w-3 rounded bg-neutral-200" />
          </div>
          <div className="h-2 w-16 rounded bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}

function GridShots() {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-2.5 p-5 sm:gap-3 sm:p-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-1.5 rounded-lg bg-white p-2 shadow-sm ring-1 ring-black/5"
        >
          <div className="h-1/2 rounded bg-neutral-100" />
          <div className="h-1.5 w-3/4 rounded bg-neutral-100" />
          <div className="h-1.5 w-1/2 rounded bg-neutral-100" />
        </div>
      ))}
    </div>
  );
}

function Browser() {
  return (
    <div className="flex h-full w-full items-end justify-center gap-4 px-6 pt-6">
      <div className="w-full max-w-[420px] overflow-hidden rounded-t-xl bg-white shadow-md ring-1 ring-black/5">
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <div className="mx-auto h-3 w-40 rounded-full bg-neutral-100" />
        </div>
        <div className="p-5">
          <div className="h-3 w-40 rounded bg-neutral-900/80" />
          <div className="mt-2 h-2 w-52 rounded bg-neutral-200" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-neutral-100" />
            <div className="h-12 rounded-lg bg-neutral-100" />
            <div className="h-12 rounded-lg bg-neutral-100" />
          </div>
          <div className="mt-4 h-7 w-28 rounded-md bg-[var(--accent)]" />
        </div>
      </div>
      <div className="hidden w-28 overflow-hidden rounded-t-2xl bg-white shadow-md ring-1 ring-black/5 sm:block">
        <div className="space-y-1.5 p-3">
          <div className="h-10 rounded bg-neutral-100" />
          <div className="h-2 w-3/4 rounded bg-neutral-100" />
          <div className="h-2 w-1/2 rounded bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}

function Brand() {
  const brands = ["EVERLANE", "QUAY", "STANLEY", "Aesop", "Nectarine"];
  return (
    <div className="flex h-full w-full flex-col justify-center bg-surface-dark px-8 py-8 text-white">
      <p className="max-w-md text-2xl font-medium leading-tight sm:text-3xl">
        Choose the right offer
        <br />
        for the right customer.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        {brands.map((b) => (
          <span
            key={b}
            className="text-xs uppercase tracking-widest text-white/55"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function Shop() {
  return (
    <div className="flex h-full w-full items-center gap-4 p-6">
      <div className="hidden w-40 shrink-0 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5 sm:block">
        <div className="flex items-center gap-2 border-b border-neutral-100 px-3 py-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[9px] font-semibold text-white">
            ✓
          </div>
          <div className="h-2.5 w-14 rounded bg-neutral-200" />
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2.5 w-full rounded bg-neutral-100" />
          <div className="h-2.5 w-3/4 rounded bg-neutral-100" />
          <div className="h-6 rounded bg-[color-mix(in_srgb,var(--accent)_18%,white)]" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-4 gap-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-1.5">
            <div className="aspect-[3/4] rounded-lg bg-neutral-200" />
            <div className="h-1.5 w-3/4 rounded bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
