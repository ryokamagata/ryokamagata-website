import type { Metadata, Viewport } from "next";
import { BASE_URL } from "@/lib/constants";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "鎌形諒 | RYO KAMAGATA - Founder & CEO, P.B Group Holdings",
    template: "%s | RYO KAMAGATA",
  },
  description:
    "P.Bグループホールディングス代表 鎌形諒の公式サイト。サロン・不動産・建築・プロダクト・AIと多角的に事業を展開。",
  keywords: [
    "鎌形諒",
    "鎌形 諒",
    "かまがた りょう",
    "Ryo Kamagata",
    "P.B Group Holdings",
    "PBグループ",
    "P.Bグループホールディングス",
    "AI TOKYO",
    "AITOKYO",
    "美容室",
    "サロン経営",
    "経営者",
    "起業家",
    "CEO",
    "不動産",
    "建築",
    "AI",
    "美容師",
  ],
  authors: [{ name: "鎌形諒", url: BASE_URL }],
  creator: "鎌形諒",
  publisher: "鎌形諒",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "鎌形諒 | RYO KAMAGATA - Founder & CEO, P.B Group Holdings",
    description:
      "P.Bグループホールディングス代表 鎌形諒の公式サイト。サロン・不動産・建築・プロダクト・AIと多角的に事業を展開。",
    url: BASE_URL,
    siteName: "RYO KAMAGATA",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "鎌形諒 - P.B Group Holdings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "鎌形諒 | RYO KAMAGATA - Founder & CEO, P.B Group Holdings",
    description:
      "P.Bグループホールディングス代表 鎌形諒の公式サイト。サロン・不動産・建築・プロダクト・AIと多角的に事業を展開。",
    images: [`${BASE_URL}/images/hero.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      ja: `${BASE_URL}/ja`,
      en: `${BASE_URL}/en`,
      "x-default": `${BASE_URL}/ja`,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
