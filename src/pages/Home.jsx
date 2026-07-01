import { Link } from "react-router";
import Hero from "./home/Hero";
import Mission from "./home/Mission";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero/>
      {/* mission */}
      <Mission/>
    </div>
  );
};

export default Home;