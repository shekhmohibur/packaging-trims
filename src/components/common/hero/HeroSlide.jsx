import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const HeroSlide = ({ slide }) => {
  return (
    <section className="relative h-[92vh] min-h-175 w-full overflow-hidden">
      {/* Background */}

      <img
        src={slide?.image}
        alt={slide?.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/15 to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-365 px-6 lg:px-8">

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="
              max-w-xl
              rounded-2xl
              bg-white/75
              backdrop-blur-xl
              p-8
              shadow-2xl
              lg:p-12
            "
          >

            {/* Small Label */}

            <motion.span
              variants={item}
              className="
                inline-block
                rounded-full
                bg-[#1E311B]
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Sustainable Packaging
            </motion.span>

            {/* Heading */}

            <motion.h1
              variants={item}
              className="
                mt-6
                whitespace-pre-line
                font-serif
                text-4xl
                font-semibold
                leading-tight
                text-[#1E311B]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {slide?.title}
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={item}
              className="
                mt-6
                max-w-lg
                text-base
                leading-8
                text-gray-700
                lg:text-lg
              "
            >
              {slide?.description}
            </motion.p>

            {/* Buttons */}

            <motion.div variants={item}>
              <HeroButtons
                primaryButton={slide?.primaryButton}
                secondaryButton={slide?.secondaryButton}
              />
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Decorative Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSlide;