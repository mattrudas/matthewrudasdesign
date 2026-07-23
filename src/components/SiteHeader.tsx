import SiteNav from "./SiteNav";

/**
 * Shared top nav shell so Home and About keep the same left/top inset.
 * 24px left/right padding on all breakpoints.
 */
export default function SiteHeader({ pathname = "" }: { pathname?: string }) {
  return (
    <header className="px-6 pt-6">
      <SiteNav pathname={pathname} />
    </header>
  );
}
