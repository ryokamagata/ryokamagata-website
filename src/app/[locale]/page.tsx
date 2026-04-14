import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Business from "@/components/Business";
import GroupChart from "@/components/GroupChart";
import News from "@/components/News";
import Video from "@/components/Video";
import Media from "@/components/Media";
import FAQ from "@/components/FAQ";
import Recruit from "@/components/Recruit";
import Contact from "@/components/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <Business />
      <GroupChart />
      <News />
      <Video />
      <Media />
      <FAQ />
      <Recruit />
      <Contact />
    </>
  );
}
