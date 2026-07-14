import { site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-foreground">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} · {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noreferrer noopener"
                  : undefined
              }
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
