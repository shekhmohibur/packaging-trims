import { Link } from "react-router";
import { motion } from "framer-motion";
import HeroFeatures from "../../data/hero/HeroData";
import heroImage from "../../assets/factory.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-md text-white">
      {/* Mobile & Tablet Background */}
      <div className="absolute inset-0 bg-[#0F2D25] lg:hidden">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_18px,white_19px,transparent_20px)]" />
      </div>

      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F2D25]/40" />

        {/* Optional Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0F2D25]/90 via-[#0F2D25]/65 to-[#0F2D25]/45" />
      </div>

      <div className="relative mx-auto max-w-360 px-6 pb-12 pt-28 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-[#E86C2D] px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E86C2D]"
          >
            Manufacturing Since Day One • Bangladesh
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-3xl font-black uppercase leading-[0.95] md:text-4xl xl:text-5xl"
          >
            Packaging Built For
            <br />
            The <span className="text-[#D6854D]">Garments</span>
            <br />
            Supply Chain.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl leading-8 text-gray-300"
          >
            Soil Packaging & Trims manufactures export-grade corrugated cartons
            and poly bags/film engineered to your buyer's specifications and
            ready for port.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="bg-[#E86C2D] px-8 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-[#cf5d23]"
            >
              Get A Quote
            </Link>

            <Link
              to="/products"
              className="border border-gray-400 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition duration-300 hover:bg-white hover:text-black"
            >
              Explore Products
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <HeroFeatures />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
