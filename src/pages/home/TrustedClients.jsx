import { motion } from "framer-motion";
import testimonialsData from "../../data/testimonials/testimonialsData";

const TrustedClients = () => {
  const { companies, testimonials } = testimonialsData;

  return (
    <section className="bg-[#F7F2E8] py-20 lg:py-28">
      <div className="max-w-360 mx-auto">
        {/* Heading */}

        <div className="px-5 lg:px-8 max-w-4xl">
          <span className="inline-flex rounded-full border border-[#17352B] px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-[#17352B]">
            Trusted By
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black uppercase leading-[1.05] text-[#17352B]">
            Garments Exporters
            <br />
            And Buying
            <br />
            Houses.
          </h2>
        </div>

        {/* Company Row */}

        <div className="mt-16 border border-[#D8D0C5]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company, index) => (
              <div
                key={company}
                className={`
          flex
          items-center
          justify-center
          px-6
          py-8
          text-center
          uppercase
          font-semibold
          tracking-[0.08em]
          text-[#B7A98C]
          border-[#D8D0C5]

          border-b
          lg:border-b-0

          ${index % 2 === 0 ? "border-r md:border-r" : "md:border-r"}

          ${index === companies.length - 1 ? "md:border-r-0 lg:border-r-0" : ""}

          lg:border-r
          lg:last:border-r-0
        `}
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3 px-5 lg:px-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="bg-[#F2EAD8] border-l-4 border-[#E56B2D] p-8"
            >
              <p className="italic text-lg leading-9 text-[#454545]">
                "{item.quote}"
              </p>

              <div className="mt-10 uppercase tracking-[0.15em] text-[12px] font-medium text-[#17352B]">
                — {item.designation}, {item.company}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
