import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white dark:bg-dark-bg text-charcoal dark:text-gray-100 px-6">
      <div className="max-w-md text-center">
        <h2 className="text-6xl font-heading-en tracking-[0.15em] mb-4">404</h2>
        <p className="text-sm text-charcoal/70 dark:text-gray-300 mb-6">
          Page not found — お探しのページは見つかりませんでした
        </p>
        <Link
          href="/ja"
          className="inline-block px-6 py-3 text-xs tracking-[0.15em] uppercase border border-charcoal/20 dark:border-white/20 hover:border-gold hover:text-gold transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
