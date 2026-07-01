import { Link } from "react-router";
import { motion } from "framer-motion";

const HeroButtons = ({ primaryButton, secondaryButton }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.6,
      }}
      className="flex flex-col sm:flex-row items-start gap-4 mt-8"
    >
      {/* Primary Button */}

      <Link
        to={primaryButton.link}
        className="
          inline-flex
          items-center
          justify-center
          px-8
          h-14
          rounded-md
          bg-[#1E311B]
          text-white
          font-semibold
          tracking-wide
          transition-all
          duration-300
          hover:bg-[#2C4527]
          hover:-translate-y-0.5
          hover:shadow-xl
          active:scale-95
        "
      >
        {primaryButton.text}
      </Link>

      {/* Secondary Button */}

      <Link
        to={secondaryButton.link}
        className="
          inline-flex
          items-center
          justify-center
          px-8
          h-14
          rounded-md
          border
          border-[#7A8B70]
          bg-white/80
          backdrop-blur-sm
          text-[#59664F]
          font-semibold
          tracking-wide
          transition-all
          duration-300
          hover:bg-white
          hover:border-[#1E311B]
          hover:text-[#1E311B]
          hover:-translate-y-0.5
          hover:shadow-lg
          active:scale-95
        "
      >
        {secondaryButton.text}
      </Link>
    </motion.div>
  );
};

export default HeroButtons;