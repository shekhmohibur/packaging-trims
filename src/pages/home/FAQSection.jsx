import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import faqData from "../../data/faq/faqData";

const FAQSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F7F2E8] py-20 lg:py-28">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="inline-flex rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-[#17352B]">
            Common Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#17352B]">
            FAQ
          </h2>
        </motion.div>

        {/* FAQ */}

        <div className="mt-14 border-t border-[#D8D0C5]">
          {faqData.map((item, index) => {
            const isOpen = open === index;

            return (
              <div key={item.id} className="border-b border-[#D8D0C5]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                >
                  <h3 className="text-lg md:text-xl uppercase font-black text-[#17352B] leading-snug">
                    {item.question}
                  </h3>

                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus size={22} className="text-[#17352B]" />
                    ) : (
                      <Plus size={22} className="text-[#17352B]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-8 text-gray-600 leading-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
