"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const faqData = {
  ja: [
    {
      q: "事業提携・協業のご相談はできますか？",
      a: "はい、事業提携やコラボレーションのご相談を承っております。下記のメールアドレスまでお気軽にお問い合わせください。",
    },
    {
      q: "取材・メディア出演の依頼はどこに送ればいいですか？",
      a: "取材・メディア出演に関するご依頼は、aitokyo.official@gmail.com までお送りください。担当より折り返しご連絡いたします。",
    },
    {
      q: "AITOKYOへの出店・ブランドシェアに興味があります",
      a: "ブランドシェアはAITOKYO社内スタッフの独立支援制度であり、外部からの募集は行っておりません。AITOKYOでの勤務を経て独立を目指す方は、まず採用へご応募ください。",
    },
    {
      q: "美容室経営のコンサルティングは受けられますか？",
      a: "鎌形個別顧問契約や経営者向けオンラインアカデミーを通じて、美容室経営のサポートを行っています。詳細はお問い合わせください。",
    },
    {
      q: "講演・セミナー登壇の依頼は可能ですか？",
      a: "内容・スケジュールに応じて対応しております。まずはメールにてご相談ください。",
    },
  ],
  en: [
    {
      q: "Can I discuss a business partnership?",
      a: "Yes, we welcome partnership and collaboration inquiries. Please contact us via the email below.",
    },
    {
      q: "Where should I send media/press inquiries?",
      a: "Please send all media and press requests to aitokyo.official@gmail.com. Our team will respond promptly.",
    },
    {
      q: "I'm interested in the Brand Share franchise model",
      a: "Brand Share is an internal independence program for AITOKYO staff only — we do not accept external applications. If you aspire to open your own salon, please start by joining AITOKYO.",
    },
    {
      q: "Do you offer salon management consulting?",
      a: "Yes, through Kamagata's personal advisory and our online academy for salon owners. Please contact us for details.",
    },
    {
      q: "Are speaking engagements available?",
      a: "Depending on the content and schedule, we may be able to accommodate. Please reach out by email.",
    },
  ],
};

export default function FAQ() {
  const locale = useLocale();
  const items = locale === "ja" ? faqData.ja : faqData.en;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeading>FAQ</SectionHeading>

        <div className="mt-12">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 60}>
              <div className="border-b border-charcoal/5 dark:border-white/5">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
                >
                  <span className="text-sm sm:text-[15px] text-charcoal/80 dark:text-gray-100 pr-8 group-hover:text-gold transition-colors">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-charcoal/45 dark:text-gray-100 group-hover:text-gold transition-all">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-charcoal/85 dark:text-gray-100 leading-relaxed pl-0 sm:pl-4">
                    {item.a}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimateOnScroll delay={300}>
          <div className="mt-10 text-center">
            <a
              href="mailto:aitokyo.official@gmail.com?subject=お問い合わせ"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors tracking-wide"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              aitokyo.official@gmail.com
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
