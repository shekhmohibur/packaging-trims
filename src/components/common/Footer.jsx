import { Link } from "react-router";
import { motion } from "framer-motion";
import footerData from "../../data/footer/footerData";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#0F2D25] text-white">
      <div className="max-w-360 mx-auto px-5 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <Link to="/" className="flex items-center gap-4">
              <div className="w-9 h-9 bg-white text-[#0F2D25] font-black flex items-center justify-center rounded-sm">
                <img src={logo} alt="Soil Packaging & Trims Logo" />
              </div>

              <h2
                className="uppercase text-xl font-bold text-white"
                style={{ fontFamily: "Barlow Condensed" }}
              >
                Soil Packaging & Trims
              </h2>
            </Link>

            <p className="mt-7 max-w-xs text-[#B8C3BC] leading-8">
              {footerData.description}
            </p>
          </motion.div>

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="uppercase text-[11px] tracking-[0.25em] text-[#E56B2D] font-semibold">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {footerData.company.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-[#D8DDD8] hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Products */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h3 className="uppercase text-[11px] tracking-[0.25em] text-[#E56B2D] font-semibold">
              Products
            </h3>

            <div className="mt-6 space-y-4">
              {footerData.products.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-[#D8DDD8] hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="uppercase text-[11px] tracking-[0.25em] text-[#E56B2D] font-semibold">
              Get Started
            </h3>

            <div className="mt-6 space-y-4">
              {footerData.getStarted.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-[#D8DDD8] hover:text-white transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9AA79F] text-center md:text-left">
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
