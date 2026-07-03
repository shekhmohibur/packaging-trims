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
          className="block text-[#D8DDD8] transition hover:text-white"
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link
        to={item.path}
        className="block text-[#D8DDD8] transition hover:text-white"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <footer className="bg-[#0F2D25] text-white">
      <div className="mx-auto max-w-360 px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-4">
              {footerData.getStarted.map((item) => (
                <div key={item.name}>{renderLink(item)}</div>
              ))}
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
