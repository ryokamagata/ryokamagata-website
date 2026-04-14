"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "ja" ? "en" : "ja";
    router.replace(pathname, { locale: next });
  };

  const navItems = [
    { key: "about", href: "#about" },
    { key: "business", href: "#business" },
    { key: "media", href: "#media" },
    { key: "philosophy", href: "#philosophy" },
    { key: "contact", href: "#contact" },
  ] as const;

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading-en text-lg tracking-[0.2em] uppercase text-charcoal dark:text-white"
          >
            RYO KAMAGATA
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.href)}
                className="text-xs tracking-[0.15em] uppercase text-charcoal/80 dark:text-gray-100 hover:text-gold transition-colors"
              >
                {t(item.key)}
              </button>
            ))}

            <div className="ml-4 pl-4 border-l border-charcoal/10 dark:border-white/10">
              {/* Language Toggle */}
              <button
                onClick={switchLocale}
                className="text-xs tracking-[0.15em] uppercase text-charcoal/80 dark:text-gray-100 hover:text-gold transition-colors"
              >
                {locale === "ja" ? "EN" : "JA"}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={switchLocale}
              className="text-xs tracking-[0.15em] uppercase text-charcoal/80 dark:text-gray-100"
            >
              {locale === "ja" ? "EN" : "JA"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-charcoal dark:text-white p-1"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M3 8h18M3 16h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-t border-charcoal/5 dark:border-white/5">
          <nav className="flex flex-col py-6 px-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.href)}
                className="text-sm tracking-[0.15em] uppercase text-charcoal/80 dark:text-gray-100 hover:text-gold transition-colors text-left py-2"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
