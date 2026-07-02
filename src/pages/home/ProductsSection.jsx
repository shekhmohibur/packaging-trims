import { motion } from "framer-motion";

const products = [
  {
    category: "CARTON",
    title: "EXPORT CARTON",
    description:
      "3/5-ply corrugated cartons sized for garments export shipment.",
    specs: [
      ["Ply", "3 / 5"],
      ["Print", "1–4 Colour"],
      ["Load", "Up to 50kg"],
    ],
  },
  {
    category: "CARTON",
    title: "MASTER & DUPLEX BOX",
    description:
      "Master cartons and duplex boxes for bulk and retail-ready packing.",
    specs: [
      ["Type", "Duplex / Master"],
      ["Finish", "Matte / Gloss"],
      ["Custom Die", "Available"],
    ],
  },
  {
    category: "POLY",
    title: "GARMENTS POLY BAG",
    description: "Printed poly bags sized for folded garments and accessories.",
    specs: [
      ["Material", "PP / LDPE"],
      ["Thickness", "30–80 Micron"],
      ["Print", "Logo / Barcode"],
    ],
  },
  {
    category: "POLY",
    title: "POLY ROLL & FILM",
    description: "Bulk poly roll and film supplied for internal packing lines.",
    specs: [
      ["Material", "PE / HDPE"],
      ["Width", "Custom Cut"],
      ["Grade", "Virgin / Recycled"],
    ],
  },
];

const ProductsSection = () => {
  return (
    <section className="bg-[#F7F2E8] py-20 lg:py-28">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-[#17352B]">
            What We Make
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[1.05] text-[#17352B]">
            Carton And Poly Packaging,
            <br />
            Built To Spec.
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="group border border-[#D8D1C6] bg-transparent p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#17352B] hover:shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#E56B2D]">
                {product.category}
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase text-[#17352B] leading-tight">
                {product.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#666]">
                {product.description}
              </p>

              <div className="mt-8 border-t border-[#D8D1C6] pt-5">
                {product.specs.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-[#ECE5D9] py-3 last:border-0"
                  >
                    <span className="text-[12px] uppercase tracking-[0.15em] text-[#777]">
                      {label}
                    </span>

                    <span className="text-[12px] font-bold uppercase text-[#17352B]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
