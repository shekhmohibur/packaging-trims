import { useState } from "react";
import { motion } from "framer-motion";

const polySteps = [
  {
    id: "01",
    title: "Granules",
    description: "PP/PE/LDPE/HDPE plastic granules are loaded and dried.",
  },
  {
    id: "02",
    title: "Extrusion",
    description: "Granules are melted and blown into continuous film.",
  },
  {
    id: "03",
    title: "Printing",
    description: "Buyer logo and branding printed to spec colour.",
  },
  {
    id: "04",
    title: "Cutting",
    description: "Film is cut to the required bag or roll dimension.",
  },
  {
    id: "05",
    title: "Sealing",
    description: "Edges heat-sealed to buyer's bag construction.",
  },
  {
    id: "06",
    title: "Inspection",
    description: "Thickness, clarity and seal strength checked.",
  },
  {
    id: "07",
    title: "Packing",
    description: "Bundled, counted and staged for delivery.",
  },
];

const cartonSteps = [
  {
    id: "01",
    title: "Paper Reel",
    description: "Kraft paper reels are selected according to required GSM.",
  },
  {
    id: "02",
    title: "Corrugation",
    description: "Fluting and liner boards are bonded into corrugated sheets.",
  },
  {
    id: "03",
    title: "Printing",
    description: "Customer artwork is flexo printed with approved colours.",
  },
  {
    id: "04",
    title: "Die Cutting",
    description: "Sheets are cut into the required carton size and design.",
  },
  {
    id: "05",
    title: "Stitching",
    description:
      "Boxes are stitched or glued depending on buyer specification.",
  },
  {
    id: "06",
    title: "Inspection",
    description: "Dimensions, bursting strength and print quality are checked.",
  },
  {
    id: "07",
    title: "Packing",
    description: "Finished cartons are bundled and prepared for shipment.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const ProductionProcess = () => {
  const [active, setActive] = useState("poly");

  const steps = active === "poly" ? polySteps : cartonSteps;

  return (
    <section className="bg-[#fff0d3] py-20">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-[#17352B]">
            How It's Made
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[1.05] text-[#17352B]">
            From Raw Material
            <br />
            To Shipping-
            <br />
            Ready Package.
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-7">
            Two production paths run in parallel — one for poly film, one for
            corrugated carton — each ending in the same quality check before
            packing.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="flex flex-wrap gap-3 mt-10">
          <button
            onClick={() => setActive("poly")}
            className={`px-6 py-3 uppercase text-xs font-semibold tracking-[0.15em] transition cursor-pointer ${
              active === "poly"
                ? "bg-[#17352B] text-white"
                : "border border-[#17352B] text-[#17352B] hover:bg-[#17352B] hover:text-white"
            }`}
          >
            Poly Bag & Film
          </button>

          <button
            onClick={() => setActive("carton")}
            className={`px-6 py-3 uppercase text-xs font-semibold tracking-[0.15em] transition cursor-pointer ${
              active === "carton"
                ? "bg-[#17352B] text-white"
                : "border border-[#17352B] text-[#17352B] hover:bg-[#17352B] hover:text-white"
            }`}
          >
            Carton
          </button>
        </div>

        {/* Timeline */}

        <motion.div
          key={active}
          className="mt-12 border-t-2 border-[#E46B2E]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Desktop */}

          <motion.div
            className="hidden lg:grid lg:grid-cols-7"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`border-b border-r border-[#d9d0c3] p-5 ${
                  index === 0 ? "border-l" : ""
                }`}
              >
                <p className="text-[11px] font-bold text-[#E46B2E] uppercase tracking-[0.18em]">
                  {step.id}
                </p>

                <h3 className="mt-4 text-lg uppercase font-black text-[#17352B]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile */}

          <motion.div
            className="lg:hidden space-y-4 pt-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="border border-[#d9d0c3] bg-white p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#E46B2E] font-bold text-sm">
                    {step.id}
                  </span>

                  <h3 className="uppercase font-black text-[#17352B]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionProcess;
