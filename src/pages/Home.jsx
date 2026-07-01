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
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Stats Card */}
      <AboutSection/>
      {/* Production Process */}
      <ProductionProcess/>
      {/* Products Section */}
      <ProductsSection/>
      {/* Sustainability Section */}
      <SustainabilitySection/>
      {/* Industries Section */}
      <IndustriesSection/>
      {/* Gallery Section */}
      <GallerySection/>
      {/* Trusted Clients */}
      <TrustedClients/>
      {/* FAQ Section */}
      <FAQSection/>
      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
};

export default Home;
