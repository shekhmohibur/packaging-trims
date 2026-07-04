import { Link } from "react-router";
import { motion } from "framer-motion";
import footerData from "../../data/footer/footerData";
import logo from "../../assets/logo.png";

const Footer = () => {
  const renderLink = (item) => {
    const isExternal =
      item.path.startsWith("http") || item.path.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={item.path}
          className="text-[#D8DDD8] transition hover:text-white"
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link
        to={item.path}
        className="text-[#D8DDD8] transition hover:text-white"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <footer className="bg-[#0F2D25] text-white">
      <div className="mx-auto max-w-360 px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <Link to="/" className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-white font-black text-[#0F2D25]">
                <img src={logo} alt="Soil Packaging & Trims Logo" />
              </div>

              <h2
                className="text-xl font-bold uppercase text-white"
                style={{ fontFamily: "Barlow Condensed" }}
              >
                Soil Packaging & Trims
              </h2>
            </Link>

            <p className="mt-7 max-w-xs leading-8 text-[#B8C3BC]">
              {footerData.description}
            </p>
          </motion.div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-12">
                      <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {footerData.company.map((item) => (
                <div key={item.name}>{renderLink(item)}</div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
              Products
            </h3>

            <div className="mt-6 space-y-4">
              {footerData.products.map((item) => (
                <div key={item.name}>{renderLink(item)}</div>
              ))}
            </div>
          </motion.div>
          </div>
          <motion.div
          className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            {/* Google Map */}
            <div className=" overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="Soil Packaging & Trims Ltd."
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233486.24103833013!2d90.24646424831136!3d23.881727009032662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3513c4314bf%3A0xf8a0f7f092a46e93!2sSoil%20Packaging%20%26%20Trims%20Ltd.!5e0!3m2!1sen!2sus!4v1783126411639!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-[#9AA79F] md:text-left">
            © {new Date().getFullYear()} Soil Packaging & Trims Ltd. All rights
            reserved.
          </p>

          <p className="text-sm text-[#9AA79F]">{footerData.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
