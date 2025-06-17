import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProductsSection from "@/components/sections/products";
import Navbar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import VideoStorySection from "@/components/sections/project";
import TeamSection from "@/components/sections/team";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <>
        <Navbar />
      <HeroSection />
      <AboutSection />
        <ProductsSection />
        <VideoStorySection />
        <TeamSection />
        <Gallery />
        <Footer />
    </>
  );
}
