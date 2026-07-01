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
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="manufacturing">
        <ProductionProcess />
      </section>

      <section id="products">
        <ProductsSection />
      </section>

      <section id="sustainability">
        <SustainabilitySection />
      </section>

      <section id="quality">
        <IndustriesSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="clients">
        <TrustedClients />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;