import { nav } from "@/lib/content";

export default function SiteNav() {
  return (
    <nav className="flex items-center gap-10 sm:gap-20">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-foreground transition-colors hover:text-accent"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
