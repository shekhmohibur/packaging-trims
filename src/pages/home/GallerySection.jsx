import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "../../data/gallery/galleryData";

const filters = ["All", "Factory", "Machine", "Poly", "Carton"];

const GallerySection = () => {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (active === "All") return galleryData;

    return galleryData.filter((item) => item.category === active);
  }, [active]);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="bg-[#fdf4e1] py-20 lg:py-28">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="inline-flex rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em]">
            Inside The Factory
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-black uppercase text-[#17352B] leading-tight">
            Production Floor, Gallery.
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg">
            Replace these placeholder tiles with real factory, machine and
            warehouse photography.
          </p>
        </motion.div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3 mt-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] transition duration-300
              ${
                active === filter
                  ? "bg-[#17352B] text-white"
                  : "border border-[#D8D0C5] text-[#17352B] hover:bg-[#17352B] hover:text-white transition-all duration-300"
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className={`group relative block w-full overflow-hidden rounded-[18px] bg-[#17352B] text-left ${
                    item.height === "tall" ? "h-[320px]" : "h-[170px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 z-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 z-20">
                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                      {item.title}
                    </h3>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-lg font-semibold text-[#17352B] shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl"
              >
                ×
              </button>

              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15, ease: "easeInOut" }}
                className="mt-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg"
              >
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-[#17352B]">
                  {selectedImage.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {selectedImage.category}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
