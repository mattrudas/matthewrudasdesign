"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-10 sm:gap-20" aria-label="Primary">
      {nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`transition-colors hover:text-accent ${
              active ? "text-accent" : "text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
