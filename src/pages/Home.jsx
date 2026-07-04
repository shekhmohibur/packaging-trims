import { Link } from "react-router";
import Hero from "./home/Hero";
import AboutSection from "./home/AboutSection";
import StatsCard from "./home/StatsCard";
import ProductionProcess from "./home/ProductionProcess";
import ProductsSection from "./home/ProductsSection";
import SustainabilitySection from "./home/SustainabilitySection";
import IndustriesSection from "./home/IndustriesSection";
import GallerySection from "./home/GallerySection";
import TrustedClients from "./home/TrustedClients";
import FAQSection from "./home/FAQSection";
import ContactSection from "./home/ContactSection";

const Home = () => {
  return (
    <>
      <section id="hero" style={{ scrollMarginTop: "100px" }}>
        <Hero />
      </section>

      <section id="about" style={{ scrollMarginTop: "100px" }}>
        <AboutSection />
      </section>

      <section id="manufacturing" style={{ scrollMarginTop: "100px" }}>
        <ProductionProcess />
      </section>

      <section id="products" style={{ scrollMarginTop: "100px" }}>
        <ProductsSection />
      </section>

      <section id="sustainability" style={{ scrollMarginTop: "100px" }}>
        <SustainabilitySection />
      </section>

      <section id="quality" style={{ scrollMarginTop: "100px" }}>
        <IndustriesSection />
      </section>

      <section id="gallery" style={{ scrollMarginTop: "100px" }}>
        <GallerySection />
      </section>

      <section id="clients" style={{ scrollMarginTop: "100px" }}>
        <TrustedClients />
      </section>

      <section id="clients" style={{ scrollMarginTop: "100px" }}>
        <FAQSection />
      </section>

      <section id="contact" style={{ scrollMarginTop: "100px" }}>
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
