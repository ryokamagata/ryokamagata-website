"use client";

import { useEffect } from "react";

/**
 * Signals React hydration success by removing the `no-js` class from <body>.
 * This must be a mounted client component to guarantee the class is only
 * removed AFTER a successful hydration. If hydration fails, the class stays
 * and content remains visible via the `body.no-js` CSS fallback.
 */
export default function HydrationReady() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("no-js");
      document.body.classList.add("js-ready");
    }
  }, []);

  return null;
}
