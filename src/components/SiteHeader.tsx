import SiteNav from "./SiteNav";

/**
 * Shared top nav shell so Home and About keep the same left/top inset.
 * Matches the home left column: 24px mobile, 64px desktop.
 */
export default function SiteHeader({ pathname = "" }: { pathname?: string }) {
  return (
    <header className="px-6 pt-6 lg:px-16">
      <SiteNav pathname={pathname} />
    </header>
  );
}
