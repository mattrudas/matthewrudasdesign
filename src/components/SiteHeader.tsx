import SiteNav from "./SiteNav";

/**
 * Shared top nav shell. Horizontal inset is owned by the parent
 * so Home (left column) and About (absolute bar) stay aligned at 24px.
 */
export default function SiteHeader({ pathname = "" }: { pathname?: string }) {
  return (
    <header className="pt-6">
      <SiteNav pathname={pathname} />
    </header>
  );
}
