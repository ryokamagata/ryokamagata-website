import { ImageResponse } from "next/og";

export const alt = "RYO KAMAGATA - P.B Group Holdings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isJa = locale === "ja";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0d0d0d 100%)",
          position: "relative",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            width: 60,
            height: 1,
            background: "#C5A55A",
            marginBottom: 32,
            display: "flex",
          }}
        />
        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          {isJa ? "鎌形 諒" : "RYO KAMAGATA"}
        </div>
        {/* Separator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 24,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(197,165,90,0.4)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 6,
              height: 6,
              border: "1px solid rgba(197,165,90,0.4)",
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(197,165,90,0.4)",
              display: "flex",
            }}
          />
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Founder & CEO, P.B Group Holdings
        </div>
      </div>
    ),
    { ...size },
  );
}
