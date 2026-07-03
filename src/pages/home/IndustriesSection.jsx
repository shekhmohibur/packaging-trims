import { useState } from "react";
import { motion } from "framer-motion";
import { Shirt, Scissors, Package, Building2, Tags, Ship } from "lucide-react";

const industries = [
  {
    title: "Garments",
    icon: Shirt,
    active: true,
  },
  {
    title: "Knitwear",
    icon: Scissors,
  },
  {
    title: "Textile",
    icon: Package,
  },
  {
    title: "Buying House",
    icon: Building2,
  },
  {
    title: "Fashion Brand",
    icon: Tags,
  },
  {
    title: "Export Company",
    icon: Ship,
  },
];

const IndustriesSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-[#F7F2E8] py-20 lg:py-28">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-[#17352B]">
            Who We Serve
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[1.05] text-[#17352B]">
            Built Around The Export
            <br />
            Garments Supply Chain.
          </h2>
        </motion.div>

        {/* Industry Cards */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isSelected = item.active && !isHovered;

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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`
                  group
                  aspect-square
                  border
                  flex
                  flex-col
                  items-center
                  justify-center
                  cursor-pointer
                  transition-all
                  duration-300
                  ${
                    isSelected
                      ? "bg-[#0F2D25] border-[#0F2D25]"
                      : "border-[#D9D1C6] bg-transparent hover:bg-[#17352B] hover:border-[#17352B]"
                  }
                `}
              >
                <div
                  className={`
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${
                      isSelected
                        ? "bg-white/10"
                        : "bg-[#17352B]/5 group-hover:bg-white/10"
                    }
                  `}
                >
                  <Icon
                    size={28}
                    className={
                      isSelected
                        ? "text-[#E56B2D]"
                        : "text-[#17352B] group-hover:text-[#E56B2D]"
                    }
                  />
                </div>

                <h3
                  className={`
                    mt-6
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    font-bold
                    text-center
                    transition-colors
                    duration-300
                    ${
                      isSelected
                        ? "text-white"
                        : "text-[#17352B] group-hover:text-white"
                    }
                  `}
                >
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
