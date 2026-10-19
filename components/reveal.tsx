"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Re-observes `.reveal` elements after client-side navigation (observer lives in the inline script in layout). */
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    (window as Window & { __reveal?: () => void }).__reveal?.();
  }, [path]);
  return null;
}
