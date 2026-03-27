import AxisCards from "@/components/home/AxisCards";
import GalleryStrip from "@/components/home/GalleryStrip";
import HomeHero from "@/components/home/HomeHero";
import IntroSection from "@/components/home/IntroSection";
import KreyolodaysSection from "@/components/home/KreyolodaysSection";
import MemoryHighlight from "@/components/home/MemoryHighlight";
import PartnerShowcase from "@/components/home/PartnerShowcase";
import QuickContactTeaser from "@/components/home/QuickContactTeaser";
import SocialShowcase from "@/components/home/SocialShowcase";
import SiteFrame from "@/components/layout/SiteFrame";
import homeData from "@/data/home";

export default function Home() {
  return (
    <SiteFrame>
      <HomeHero hero={homeData.hero} />
      <IntroSection intro={homeData.intro} />
      <AxisCards axes={homeData.axes} />
      <MemoryHighlight section={homeData.memory} />
      <KreyolodaysSection section={homeData.kreyolodays} />
      <GalleryStrip gallery={homeData.gallery} />
      <PartnerShowcase partners={homeData.partners} />
      <SocialShowcase social={homeData.social} />
      <QuickContactTeaser contact={homeData.contact} />
    </SiteFrame>
  );
}
