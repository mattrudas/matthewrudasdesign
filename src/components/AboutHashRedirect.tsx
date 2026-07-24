"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Redirects legacy /#about hash links to the /about subpage.
 */
export default function AboutHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#about") {
      router.replace("/about");
    }
  }, [router]);

  return null;
}
