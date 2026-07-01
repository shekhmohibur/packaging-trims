import { Link } from "react-router";
import Hero from "./home/Hero";
import AboutSection from "./home/AboutSection";
import StatsCard from "./home/StatsCard";
import ProductionProcess from "./home/ProductionProcess";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Stats Card */}
      <AboutSection/>
      {/* Production Process */}
      <ProductionProcess/>
    </div>
  );
};

export default Home;
