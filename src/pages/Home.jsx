import { Link } from "react-router";
import Hero from "./home/Hero";
import AboutSection from "./home/AboutSection";
import StatsCard from "./home/StatsCard";
import ProductionProcess from "./home/ProductionProcess";
import ProductsSection from "./home/ProductsSection";
import SustainabilitySection from "./home/SustainabilitySection";

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
    </div>
  );
};

export default Home;
