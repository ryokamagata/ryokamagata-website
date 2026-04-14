"use client";

/**
 * Catches errors in the root layout itself. Must render its own <html>
 * and <body> since the root layout has crashed.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          backgroundColor: "#FAFAF8",
          color: "#2C2C2C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "480px", padding: "2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Something went wrong
          </h2>
          <p style={{ fontSize: "0.875rem", color: "rgba(44, 44, 44, 0.7)", marginBottom: "1.5rem" }}>
            ページの表示に問題が発生しました。
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid rgba(44, 44, 44, 0.2)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {error?.digest ? "Try again" : "Try again"}
          </button>
        </div>
      </body>
    </html>
  );
}
