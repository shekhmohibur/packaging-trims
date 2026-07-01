import { Link } from "react-router";
import HeroFeatures from "../../data/hero/HeroData";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F2D25] text-white">

      {/* diagonal lines */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_18px,white_19px,transparent_20px)]" />

      <div className="relative max-w-360 mx-auto px-6 lg:px-10 pt-28 pb-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full border border-[#E86C2D] px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E86C2D]">
              Manufacturing Since Day One • Bangladesh
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-[0.95]">
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
                className="bg-[#E86C2D] px-8 py-4 uppercase text-sm font-semibold tracking-widest hover:bg-[#cf5d23] transition"
              >
                Get A Quote
              </Link>

              <Link
                to="/products"
                className="border border-gray-500 px-8 py-4 uppercase text-sm font-semibold tracking-widest hover:bg-white hover:text-black transition"
              >
                Explore Products
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="hidden lg:flex justify-end">

            <img
              src="/hero-packaging.png"
              alt=""
              className="w-full max-w-xl object-contain"
            />

          </div>

        </div>

        <HeroFeatures />

      </div>

    </section>
  );
};

export default Hero;