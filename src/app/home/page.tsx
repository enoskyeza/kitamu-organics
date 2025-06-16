import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProductsSection from "@/components/sections/products";
import Navbar from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
        <Navbar />
      <HeroSection />
      <AboutSection />
        <ProductsSection />
        <Footer />
    </>
  );
}
