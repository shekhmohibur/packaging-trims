import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "../../data/gallery/galleryData";

const filters = [
  "All",
  "Factory",
  "Machine",
  "Poly",
  "Carton",
];

const GallerySection = () => {
  const [active, setActive] = useState("All");

  const filteredImages = useMemo(() => {
    if (active === "All") return galleryData;

    return galleryData.filter(
      (item) => item.category === active
    );
  }, [active]);

  return (
    <section className="bg-[#F7F2E8] py-20 lg:py-28">

      <div className="max-w-360 mx-auto px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em]">
            Inside The Factory
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-black uppercase text-[#17352B] leading-tight">
            Production Floor,
            Gallery.
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg">
            Replace these placeholder tiles with real
            factory, machine and warehouse photography.
          </p>
        </motion.div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3 mt-10">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] transition
              ${
                active === filter
                  ? "bg-[#17352B] text-white"
                  : "border border-[#D8D0C5] text-[#17352B] hover:bg-[#17352B] hover:text-white"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Gallery */}

        <motion.div
          layout
          className="columns-1 md:columns-2 xl:columns-4 gap-5 mt-14"
        >

          <AnimatePresence>

            {filteredImages.map((item) => (

              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: .9 }}
                transition={{ duration: .35 }}
                className="mb-5 break-inside-avoid"
              >

                <div
                  className={`group relative overflow-hidden bg-[#17352B]
                  ${
                    item.height === "tall"
                      ? "h-[320px]"
                      : "h-[170px]"
                  }`}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17352B] via-transparent to-white/20" />

                  <div className="absolute bottom-5 left-5">

                    <h3 className="uppercase font-bold text-white text-sm tracking-[0.15em]">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      </div>

    </section>
  );
};

export default GallerySection;