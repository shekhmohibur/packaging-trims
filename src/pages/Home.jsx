import { Link } from "react-router";
import Hero from "./home/Hero";
import Mission from "./home/Mission";
import MaterialInnovation from "./home/MaterialInnovation";
import WhyChooseUs from "./home/WhyChooseUs";
import CallToAction from "./home/CallToAction";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* mission */}
      <Mission />
      {/* material innovation */}
      <MaterialInnovation />
      {/* why choose us */}
      <WhyChooseUs />
      {/* call to action */}
      <CallToAction />
    </div>
  );
};

export default Home;
