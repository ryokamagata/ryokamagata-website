import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "ja") {
    return {
      title: "鎌形諒 | RYO KAMAGATA - Founder & CEO, P.B Group Holdings",
      description:
        "P.Bグループホールディングス代表 鎌形諒の公式サイト。サロン・不動産・建築・プロダクト・AIと多角的に事業を展開。",
      verification: {
        google: "fymHBnl2mcqFuRxdR9arFkTpS2F7f5DGEadiN8SBoig",
      },
    };
  }

  return {
    title: "RYO KAMAGATA - Founder & CEO, P.B Group Holdings",
    description:
      "Official website of Ryo Kamagata, CEO of P.B Group Holdings. Leading ventures across salon, real estate, architecture, product, and AI.",
    verification: {
      google: "fymHBnl2mcqFuRxdR9arFkTpS2F7f5DGEadiN8SBoig",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} ${notoSerifJP.variable} ${notoSansJP.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "鎌形諒",
              alternateName: "Ryo Kamagata",
              jobTitle: "Founder & CEO",
              worksFor: {
                "@type": "Organization",
                name: "P.B Group Holdings",
              },
              url: "https://ryokamagata.com",
              sameAs: [
                "https://www.instagram.com/kamagata_ryo/",
                "https://lit.link/en/kamagataryo1official",
              ],
              knowsAbout: [
                "Hair Salon Management",
                "Real Estate",
                "Architecture",
                "AI Technology",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-off-white text-charcoal dark:bg-dark-bg dark:text-gray-100 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
