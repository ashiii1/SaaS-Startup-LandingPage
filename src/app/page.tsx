import { CallToAction } from "@/sections/CallToAction";
import { FAQs } from "@/sections/FAQs";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import ScrollToTop from "@/components/ScrollToTop";
import { Pricing } from "@/sections/Pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <Pricing/>
      <FAQs />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
