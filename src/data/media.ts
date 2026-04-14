export type MediaCategory =
  | "web_article"
  | "book"
  | "award"
  | "tv"
  | "magazine"
  | "seminar";

export type MediaItem = {
  id: string;
  title: { ja: string; en: string };
  publisher: string;
  year: number;
  category: MediaCategory;
  url?: string;
  coverImage?: string;
};

// 最新順にソート
export const mediaItems: MediaItem[] = [
  // --- 2025 ---
  {
    id: "qj-2025",
    title: {
      ja: "AI TOKYO鎌形諒が目指すブランドシェア×出店革新。BGパートナーズ「店舗まるごとリース」",
      en: "AI TOKYO's Brand Share × Store Innovation with BG Partners",
    },
    publisher: "リクエストQJ",
    year: 2025,
    category: "web_article",
    url: "https://www.qjnavi.jp/special/trend/bgpartners_aitokyo/",
  },
  {
    id: "beautopia-2025",
    title: {
      ja: "最速スピードで全国80店舗へ！ AI TOKYO・鎌形諒さん×BGパートナーズ",
      en: "Racing to 80 Stores Nationwide: AI TOKYO × BG Partners",
    },
    publisher: "ビュートピア",
    year: 2025,
    category: "web_article",
    url: "https://www.beautopia.jp/154329/",
  },
  {
    id: "hairmode-2025",
    title: {
      ja: "ヘアモード 経営特集 — 鎌形諒インタビュー掲載",
      en: "Hair Mode Management Feature — Ryo Kamagata Interview",
    },
    publisher: "ヘアモード",
    year: 2025,
    category: "magazine",
  },
  // --- 2024 ---
  {
    id: "qj-2024",
    title: {
      ja: "美容業界の既成概念をぶち破る異端児！「地球を庭にする男」AI TOKYO鎌形諒の超・非常識経営",
      en: "Breaking Beauty Industry Norms: AI TOKYO Ryo Kamagata's Unconventional Management",
    },
    publisher: "リクエストQJ",
    year: 2024,
    category: "web_article",
    url: "https://www.qjnavi.jp/special/trend/kamagata_keiei/",
  },
  // --- 2023 ---
  {
    id: "morelijo-2023",
    title: {
      ja: "目標は4年で80店舗。人気美容師が仕掛けるサロンづくりの秘訣",
      en: "80 Stores in 4 Years: Popular Hairdresser's Secret to Salon Building",
    },
    publisher: "モアリジョブ",
    year: 2023,
    category: "web_article",
    url: "https://relax-job.com/more/126957",
  },
  // --- 2022 ---
  {
    id: "kami-charisma-2026-award",
    title: {
      ja: "KAMI CHARISMA 2026 Greaty∞ カミカリスマヘアサロン — AI TOKYO 渋谷店 受賞",
      en: "KAMI CHARISMA 2026 Greaty∞ Hair Salon Award — AI TOKYO Shibuya",
    },
    publisher: "KAMI CHARISMA",
    year: 2026,
    category: "award",
  },
  {
    id: "kami-charisma-2025-award",
    title: {
      ja: "KAMI CHARISMA 2025 Greaty∞ カミカリスマヘアサロン — AI TOKYO 渋谷店 受賞",
      en: "KAMI CHARISMA 2025 Greaty∞ Hair Salon Award — AI TOKYO Shibuya",
    },
    publisher: "KAMI CHARISMA",
    year: 2025,
    category: "award",
  },
  {
    id: "kami-charisma-2024-award",
    title: {
      ja: "KAMI CHARISMA 2024 Greaty∞ カミカリスマヘアサロン — AI TOKYO 渋谷店 受賞",
      en: "KAMI CHARISMA 2024 Greaty∞ Hair Salon Award — AI TOKYO Shibuya",
    },
    publisher: "KAMI CHARISMA",
    year: 2024,
    category: "award",
  },
  {
    id: "kami-charisma-2023-award",
    title: {
      ja: "KAMI CHARISMA 2023 カミカリスマ美容師 1つ星 受賞（個人）",
      en: "KAMI CHARISMA 2023 — 1-Star Hairdresser Award (Individual)",
    },
    publisher: "KAMI CHARISMA",
    year: 2023,
    category: "award",
  },
  {
    id: "kami-charisma-2022-award",
    title: {
      ja: "KAMI CHARISMA 2022 Greaty∞ カット（メンズカット）部門 受賞（個人）",
      en: "KAMI CHARISMA 2022 Greaty∞ Cut (Men\'s Cut) Award (Individual)",
    },
    publisher: "KAMI CHARISMA",
    year: 2022,
    category: "award",
  },
  {
    id: "kami-charisma-book-2023",
    title: {
      ja: "KAMI CHARISMA Hair Salon Guide 2023 — カミカリスマ美容師1つ星として掲載",
      en: "KAMI CHARISMA Hair Salon Guide 2023 — Featured as 1-Star Hairdresser",
    },
    publisher: "主婦の友社（後援: 外務省・経産省・厚労省・観光庁）",
    year: 2023,
    category: "book",
  },
  {
    id: "kami-charisma-book-2022",
    title: {
      ja: "KAMI CHARISMA Hair Salon Guide 2022 — Greaty∞部門に選出・掲載",
      en: "KAMI CHARISMA Hair Salon Guide 2022 — Featured in Greaty∞",
    },
    publisher: "主婦の友社（後援: 外務省・経産省・厚労省・観光庁）",
    year: 2022,
    category: "book",
  },
  {
    id: "publicmedia-2022",
    title: {
      ja: "AI TOKYO立上げから2年。鎌形諒が描く5年後のビジョンと経営への想いとは？",
      en: "2 Years After Launching AI TOKYO: Ryo Kamagata's 5-Year Vision",
    },
    publisher: "パブリックメディアTV",
    year: 2022,
    category: "web_article",
    url: "https://publicmedia.co.jp/topics/22121901-2",
  },
  // --- 2021 ---
  {
    id: "qj-2021",
    title: {
      ja: "倍速美容師、AI TOKYO鎌形諒が描く新世代美容室のあり方とは",
      en: "AI TOKYO's Ryo Kamagata: Envisioning the Next-Gen Hair Salon",
    },
    publisher: "リクエストQJ",
    year: 2021,
    category: "web_article",
    url: "https://www.qjnavi.jp/special/trend/aitokyo_kamagata/",
  },
  {
    id: "boblog-2021",
    title: {
      ja: "若干25歳、Z世代の経営者現る！／鎌形 諒（AI TOKYO）",
      en: "A Gen Z Salon Owner at Just 25 — Ryo Kamagata (AI TOKYO)",
    },
    publisher: "ボブログTV",
    year: 2021,
    category: "web_article",
    url: "https://old.boblog.tv/2021030210305/",
  },
  {
    id: "prtimes-award",
    title: {
      ja: "世界に誇る日本の美容師として、AI TOKYO代表の鎌形諒がアワード受賞",
      en: "AI TOKYO's Ryo Kamagata Wins Award as World-Class Japanese Hairdresser",
    },
    publisher: "PR TIMES",
    year: 2021,
    category: "web_article",
    url: "https://prtimes.jp/main/html/rd/p/000000005.000082144.html",
  },
  {
    id: "prtimes-talk",
    title: {
      ja: "GOALD中村トメ吉×AI TOKYO鎌形諒 — 美容師の世界の課題に革命派2名が初対談",
      en: "GOALD × AI TOKYO: Two Revolutionaries Discuss the Future of Hairdressing",
    },
    publisher: "PR TIMES",
    year: 2021,
    category: "web_article",
    url: "https://prtimes.jp/main/html/rd/p/000000003.000082144.html",
  },
  {
    id: "prtimes-launch",
    title: {
      ja: "元有名店美容師が集結！激戦区渋谷で美容業界の革命店現る。",
      en: "Top Hairdressers Unite: A Revolutionary Salon Emerges in Shibuya",
    },
    publisher: "PR TIMES / サロンプロモマガジン",
    year: 2021,
    category: "web_article",
    url: "https://prtimes.jp/main/html/rd/p/000000001.000082144.html",
  },
  {
    id: "bangs-2021",
    title: {
      ja: "BORDERLESS 枠を突き破るゲーム・チェンジャー対談 GOALD中村トメ吉×AI TOKYO 鎌形諒",
      en: "BORDERLESS: Game-Changer Talk — GOALD × AI TOKYO",
    },
    publisher: "bangs（バングス）",
    year: 2021,
    category: "web_article",
  },
  // --- 雑誌掲載 ---
  {
    id: "bob-monthly",
    title: {
      ja: "月刊BOB — サロン経営特集 掲載",
      en: "Monthly BOB — Salon Management Feature",
    },
    publisher: "月刊BOB",
    year: 2024,
    category: "magazine",
  },
  {
    id: "reqj-magazine",
    title: {
      ja: "リクエストQJ — 経営者インタビュー掲載",
      en: "Request QJ Magazine — Owner Interview Feature",
    },
    publisher: "リクエストQJ（誌面）",
    year: 2024,
    category: "magazine",
  },
  {
    id: "mens-preppy",
    title: {
      ja: "MENS PREPPY（メンズプレッピー）— サロン・経営特集 掲載",
      en: "MEN'S PREPPY — Salon & Management Feature",
    },
    publisher: "MEN'S PREPPY",
    year: 2023,
    category: "magazine",
  },
  {
    id: "chokichoki",
    title: {
      ja: "CHOKiCHOKi — OCEAN TOKYO時代ヘアカタログ掲載",
      en: "CHOKiCHOKi — Hair Catalog Feature (OCEAN TOKYO era)",
    },
    publisher: "CHOKiCHOKi",
    year: 2019,
    category: "magazine",
  },
  {
    id: "fineboys",
    title: {
      ja: "FINEBOYS+plus HAIR — ヘアスタイル掲載",
      en: "FINEBOYS+plus HAIR — Hairstyle Feature",
    },
    publisher: "FINEBOYS",
    year: 2019,
    category: "magazine",
  },
  {
    id: "mens-nonno",
    title: {
      ja: "MEN'S NON-NO — ヘアスタイル企画掲載",
      en: "MEN'S NON-NO — Hairstyle Feature",
    },
    publisher: "MEN'S NON-NO",
    year: 2019,
    category: "magazine",
  },
  {
    id: "ocean-tokyo-book",
    title: {
      ja: "OCEAN TOKYO ヘアスタイルBOOK — スタイリストとして掲載",
      en: "OCEAN TOKYO Hairstyle Book — Featured as Stylist",
    },
    publisher: "OCEAN TOKYO",
    year: 2019,
    category: "book",
  },
];
