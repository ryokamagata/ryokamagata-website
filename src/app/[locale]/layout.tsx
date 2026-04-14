import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import { routing } from "@/i18n/routing";
import { BASE_URL, SITE_NAME } from "@/lib/constants";
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
  const isJa = locale === "ja";

  const title = isJa
    ? "鎌形諒 | RYO KAMAGATA - Founder & CEO, P.B Group Holdings"
    : "RYO KAMAGATA - Founder & CEO, P.B Group Holdings";

  const description = isJa
    ? "P.Bグループホールディングス代表 鎌形諒の公式サイト。サロン・不動産・建築・プロダクト・AIと多角的に事業を展開。"
    : "Official website of Ryo Kamagata, CEO of P.B Group Holdings. Leading ventures across salon, real estate, architecture, product, and AI.";

  return {
    title,
    description,
    verification: {
      google: [
        "fymHBnl2mcqFuRxdR9arFkTpS2F7f5DGEadiN8SBoig",
        "CQ1keTyYTyEvIzAEf_uyyWFpRav-FBSMdTsyMey9eBg",
      ],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ja: `${BASE_URL}/ja`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/ja`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: SITE_NAME,
      locale: isJa ? "ja_JP" : "en_US",
      alternateLocale: isJa ? "en_US" : "ja_JP",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/hero.jpg`,
          width: 1200,
          height: 630,
          alt: isJa ? "鎌形諒 - P.B Group Holdings" : "Ryo Kamagata - P.B Group Holdings",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [`${BASE_URL}/images/hero.jpg`],
    },
  };
}

function JsonLd({ locale }: { locale: string }) {
  const isJa = locale === "ja";

  const title = isJa
    ? "鎌形諒 | RYO KAMAGATA - Founder & CEO, P.B Group Holdings"
    : "RYO KAMAGATA - Founder & CEO, P.B Group Holdings";

  const description = isJa
    ? "P.Bグループホールディングス代表 鎌形諒の公式サイト。サロン・不動産・建築・プロダクト・AIと多角的に事業を展開。"
    : "Official website of Ryo Kamagata, CEO of P.B Group Holdings. Leading ventures across salon, real estate, architecture, product, and AI.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "鎌形諒",
        alternateName: "Ryo Kamagata",
        jobTitle: "Founder & CEO",
        birthDate: "1995",
        worksFor: {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
        },
        url: BASE_URL,
        image: `${BASE_URL}/images/hero.jpg`,
        sameAs: [
          "https://www.instagram.com/kamagata_ryo/",
          "https://lit.link/en/kamagataryo1official",
        ],
        knowsAbout: [
          "Hair Salon Management",
          "Real Estate",
          "Architecture",
          "AI Technology",
          "Product Development",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "P.B Group Holdings",
        founder: { "@id": `${BASE_URL}/#person` },
        description: isJa
          ? "美容室・不動産・建築・プロダクト・AIと多角的に事業を展開するグループ企業"
          : "Diversified group spanning salon, real estate, architecture, product, and AI ventures",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE_NAME,
        description,
        inLanguage: ["ja", "en"],
        publisher: { "@id": `${BASE_URL}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/${locale}`,
        url: `${BASE_URL}/${locale}`,
        name: title,
        description,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#person` },
        inLanguage: locale,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
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
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <JsonLd locale={locale} />
      </head>
      <body className="min-h-screen bg-off-white dark:bg-dark-bg text-charcoal dark:text-gray-100 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
