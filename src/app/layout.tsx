import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";
import "./globals.css";

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
    "Ryo Kamagata",
    "P.B Group Holdings",
    "AI TOKYO",
    "AITOKYO",
    "美容室",
    "サロン経営",
    "経営者",
    "不動産",
    "建築",
    "AI",
    "P.Bグループホールディングス",
  ],
  authors: [{ name: "鎌形諒", url: BASE_URL }],
  creator: "鎌形諒",
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
