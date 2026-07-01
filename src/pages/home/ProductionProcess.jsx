import { useState } from "react";
import { motion } from "framer-motion";

const polySteps = [
  {
    id: "01",
    title: "Granules",
    description:
      "PP/PE/LDPE/HDPE plastic granules are loaded and dried.",
  },
  {
    id: "02",
    title: "Extrusion",
    description:
      "Granules are melted and blown into continuous film.",
  },
  {
    id: "03",
    title: "Printing",
    description:
      "Buyer logo and branding printed to spec colour.",
  },
  {
    id: "04",
    title: "Cutting",
    description:
      "Film is cut to the required bag or roll dimension.",
  },
  {
    id: "05",
    title: "Sealing",
    description:
      "Edges heat-sealed to buyer's bag construction.",
  },
  {
    id: "06",
    title: "Inspection",
    description:
      "Thickness, clarity and seal strength checked.",
  },
  {
    id: "07",
    title: "Packing",
    description:
      "Bundled, counted and staged for delivery.",
  },
];

const cartonSteps = [
  {
    id: "01",
    title: "Paper Reel",
    description:
      "Kraft paper reels are selected according to required GSM.",
  },
  {
    id: "02",
    title: "Corrugation",
    description:
      "Fluting and liner boards are bonded into corrugated sheets.",
  },
  {
    id: "03",
    title: "Printing",
    description:
      "Customer artwork is flexo printed with approved colours.",
  },
  {
    id: "04",
    title: "Die Cutting",
    description:
      "Sheets are cut into the required carton size and design.",
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
    description:
      "Dimensions, bursting strength and print quality are checked.",
  },
  {
    id: "07",
    title: "Packing",
    description:
      "Finished cartons are bundled and prepared for shipment.",
  },
];

const ProductionProcess = () => {
  const [active, setActive] = useState("poly");

  const steps = active === "poly" ? polySteps : cartonSteps;

  return (
    <section className="bg-[#fff0d3] py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-[#17352B]">
            How It's Made
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] text-[#17352B]">
            From Raw Material
            <br />
            To Shipping-
            <br />
            Ready Package.
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-7">
            Two production paths run in parallel — one for poly film,
            one for corrugated carton — each ending in the same quality
            check before packing.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="flex flex-wrap gap-3 mt-10">

          <button
            onClick={() => setActive("poly")}
            className={`px-6 py-3 uppercase text-xs font-semibold tracking-[0.15em] transition
            ${
              active === "poly"
                ? "bg-[#17352B] text-white"
                : "border border-[#17352B] text-[#17352B] hover:bg-[#17352B] hover:text-white"
            }`}
          >
            Poly Bag & Film
          </button>

          <button
            onClick={() => setActive("carton")}
            className={`px-6 py-3 uppercase text-xs font-semibold tracking-[0.15em] transition
            ${
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
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .45 }}
          className="mt-12 border-t-2 border-[#E46B2E]"
        >

          {/* Desktop */}

          <div className="hidden lg:grid lg:grid-cols-7">

            {steps.map((step, index) => (

              <div
                key={step.id}
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
              </div>

            ))}

          </div>

          {/* Mobile */}

          <div className="lg:hidden space-y-4 pt-6">

            {steps.map((step) => (

              <div
                key={step.id}
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
              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProductionProcess;