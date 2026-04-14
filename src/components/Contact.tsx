"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const links = [
  {
    key: "instagram",
    href: "https://www.instagram.com/kamagata_ryo/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: "official",
    href: "https://aitokyo-pb.jp/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    key: "litlink",
    href: "https://lit.link/en/kamagataryo1official",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    key: "email",
    href: "mailto:aitokyo.official@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
];

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-dark-surface"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <AnimateOnScroll key={link.key} delay={i * 100}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 p-6 border border-charcoal/5 dark:border-white/5 hover:border-gold/30 dark:hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-charcoal/85 dark:text-gray-100 group-hover:text-gold transition-colors">
                  {link.icon}
                </div>
                <span className="text-sm tracking-[0.1em] uppercase text-charcoal/80 dark:text-gray-100 group-hover:text-gold transition-colors">
                  {t(link.key)}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="ml-auto text-charcoal/35 dark:text-gray-100 group-hover:text-gold transition-colors"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
