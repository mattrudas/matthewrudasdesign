import { nav } from "@/lib/content";

/**
 * Top navigation. Uses plain anchors (not next/link) so About always does a
 * full navigation to /about — more reliable on SSO-protected preview deploys.
 */
export default function SiteNav({ pathname = "" }: { pathname?: string }) {
  return (
    <nav className="flex items-center gap-10 sm:gap-20" aria-label="Primary">
      {nav.map((item) => {
        const external = item.href.startsWith("http");
        const active =
          !external &&
          (item.href === "/"
            ? pathname === "/"
            : item.href.startsWith("/") &&
              !item.href.startsWith("/#") &&
              (pathname === item.href ||
                pathname.startsWith(`${item.href}/`)));

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
