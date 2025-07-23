// import ComingSoon from "@/components/pages/comingSoon";

import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import VideoStorySection from "@/components/sections/project";
import ProductsSection from "@/components/sections/products";
import TeamSection from "@/components/sections/team";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
        <ServicesSection />
        <VideoStorySection />
        <ProductsSection />
        <TeamSection />
        <Gallery />
      {/*<ComingSoon />*/}
    </>
  );
}
