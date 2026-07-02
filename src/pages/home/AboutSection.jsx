import { motion } from "framer-motion";
import StatsCard from "./StatsCard";

const features = [
  {
    number: "01",
    title: "BUILT FOR GARMENTS",
    desc: "Most of our cartons and poly runs are sized and printed specifically for RMG export cartons and product poly.",
  },
  {
    number: "02",
    title: "OWN EXTRUSION LINE",
    desc: "Poly bag and film production starts from raw granules, not outsourced sheet — tighter control on thickness and clarity.",
  },
  {
    number: "03",
    title: "BUYER-SPEC MATCHING",
    desc: "Cartons and poly are cut to the exact size, GSM and printing a buying house or brand requires.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#F7F2E8] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-360 mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full border border-[#183228] px-4 py-1 text-[10px] uppercase tracking-[0.25em] font-medium">
              Who We Are
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl xl:text-5xl uppercase font-black leading-[1.05] text-[#17352B]">
              Two Materials, One Production Line — Cartons And Poly, Made Side
              By Side.
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Soil Packaging & Trims runs corrugated carton production and
              plastic-granule-to-film poly manufacturing under one roof, built
              specifically to serve garments, knitwear and woven exporters who
              need both, on the same delivery schedule.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Every order is matched to a buyer's compliance sheet — size, GSM,
              ply, thickness, print colour — before it reaches the floor, so
              what ships out is what the buyer signed off on.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((item) => (
                <div
                  key={item.number}
                  className="border-b border-gray-300 pb-5"
                >
                  <div className="flex gap-5">
                    <span className="text-[#E56B2D] font-bold text-sm">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="uppercase font-bold text-[#17352B]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600 text-sm leading-7">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <StatsCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
