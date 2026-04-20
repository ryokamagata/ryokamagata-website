"use client";

import { useEffect } from "react";

/**
 * Error boundary for the locale layout. Catches rendering/hydration errors
 * so the user sees something instead of a blank page.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-dark-bg text-charcoal dark:text-gray-100 px-6">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-heading-en tracking-[0.15em] uppercase mb-4">
          Something went wrong
        </h2>
        <p className="text-sm text-charcoal/70 dark:text-gray-300 mb-6">
          ページの表示に問題が発生しました。再読み込みをお試しください。
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 text-xs tracking-[0.15em] uppercase border border-charcoal/20 dark:border-white/20 hover:border-gold hover:text-gold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
