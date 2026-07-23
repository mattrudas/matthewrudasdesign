import { nav, site } from "@/lib/content";

/**
 * Top navigation. Uses plain anchors (not next/link) so About always does a
 * full navigation to /about — more reliable on SSO-protected preview deploys.
 * Avatar GIF links home.
 */
export default function SiteNav({ pathname = "" }: { pathname?: string }) {
  const homeActive = pathname === "/";

  return (
    <nav className="flex items-center gap-10 sm:gap-20" aria-label="Primary">
      <a
        href="/"
        aria-label="Home"
        aria-current={homeActive ? "page" : undefined}
        className="shrink-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.avatar}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
      </a>

      {nav.map((item) => {
        const external = item.href.startsWith("http");
        const isInternalPage =
          item.href.startsWith("/") && !item.href.startsWith("/#");
        const active =
          !external &&
          isInternalPage &&
          (pathname === item.href || pathname.startsWith(`${item.href}/`));

        return (
          <a
            key={item.href}
            href={item.href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-current={active ? "page" : undefined}
            className={`transition-colors hover:text-accent ${
              active ? "text-accent" : "text-foreground"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
