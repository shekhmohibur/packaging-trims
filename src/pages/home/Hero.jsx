import { Link } from "react-router";
import HeroFeatures from "../../data/hero/HeroData";
import heroImage from "../../assets/factory.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white rounded-md">
      {/* Mobile & Tablet Background */}
      <div className="absolute inset-0 bg-[#0F2D25] lg:hidden">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_18px,white_19px,transparent_20px)]" />
      </div>

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F2D25]/40" />

        {/* Optional Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0F2D25]/90 via-[#0F2D25]/65 to-[#0F2D25]/45" />
      </div>

      <div className="relative max-w-360 mx-auto px-6 lg:px-10 pt-28 pb-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#E86C2D] px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E86C2D]">
            Manufacturing Since Day One • Bangladesh
          </span>

          <h1 className="mt-6 text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[0.95]">
            Packaging Built For
            <br />
            The <span className="text-[#D6854D]">Garments</span>
            <br />
            Supply Chain.
          </h1>

          <p className="mt-6 max-w-xl text-gray-300 leading-8">
            Soil Packaging & Trims manufactures export-grade
            corrugated cartons and poly bags/film engineered
            to your buyer's specifications and ready for port.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-[#E86C2D] px-8 py-4 uppercase text-sm font-semibold tracking-widest transition hover:bg-[#cf5d23]"
            >
              Get A Quote
            </Link>

            <Link
              to="/products"
              className="border border-gray-400 px-8 py-4 uppercase text-sm font-semibold tracking-widest transition duration-300 hover:bg-white hover:text-black"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <HeroFeatures />
      </div>
    </section>
  );
};

export default Hero;