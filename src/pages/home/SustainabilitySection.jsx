import { motion } from "framer-motion";
import { Sprout, Recycle, Earth, Droplets, Zap } from "lucide-react";

const sustainabilityItems = [
  {
    icon: Sprout,
    title: "Efficient Production",
    description: "Extrusion runs tuned to cut granule waste per batch.",
  },
  {
    icon: Recycle,
    title: "Recycling Loop",
    description: "Offcut film and carton trim re-enters the material stream.",
  },
  {
    icon: Earth,
    title: "Lower Emissions",
    description: "Combined carton + poly lines cut transport between vendors.",
  },
  {
    icon: Droplets,
    title: "Waste Tracking",
    description: "Scrap logged per shift to catch process losses early.",
  },
  {
    icon: Zap,
    title: "Efficient Machinery",
    description:
      "Extrusion and corrugation lines maintained for lower energy use.",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="bg-[#0F2D25] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-[#E56B2D]">
            Material Responsibility
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[1.05] text-[#F5EFE3]">
            Less Plastic Waste, More Accountable Production.
          </h2>

          <p className="mt-7 max-w-2xl text-[#B7B9B7] leading-8">
            Sustainability here means less scrap per order, granules that get
            reused, and a factory line that tracks its own waste — not a slogan
            on the wall.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 border border-white/15">
          {sustainabilityItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  group
                  border-b
                  sm:border-r
                  border-white/15
                  p-8
                  last:border-r-0
                  xl:border-b-0
                  hover:bg-white/[0.03]
                  transition-all
                  duration-300
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#17352B] border border-white/10">
                  <Icon size={24} className="text-[#E56B2D]" />
                </div>

                <h3 className="mt-6 text-lg font-black uppercase text-[#F5EFE3]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[#AEB3AE]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
