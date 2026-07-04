import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import logo from "../../assets/logo.png";

const navItems = [
  { name: "ABOUT", id: "about" },
  { name: "PRODUCTS", id: "products" },
  { name: "MANUFACTURING", id: "manufacturing" },
  { name: "SUSTAINABILITY", id: "sustainability" },
  { name: "QUALITY", id: "quality" },
  { name: "GALLERY", id: "gallery" },
  { name: "CLIENTS", id: "clients" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    () => location.hash.replace("#", "") || "about",
  );

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 8);

      const sections = document.querySelectorAll("section[id]");
      const offset = 140;
      let currentId = "about";
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentId = section.id;
        }
      });

      setActiveSection(currentId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const section = document.getElementById(hash);
    if (!section) return;
    setActiveSection(hash);
    const top = section.getBoundingClientRect().top + window.scrollY - 96;
    window.requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [location.hash, location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    setActiveSection(id);
    setMobileOpen(false);

    const scroll = () => {
      const target =
        id === "contact"
          ? section.querySelector("form, .quote-form") || section
          : section;
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.replaceState({}, "", `/#${id}`);
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 220);
    } else {
      scroll();
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderNavItems = (mobile = false) =>
    navItems.map((item) => {
      const active = activeSection === item.id;
      const ListItem = mobile ? motion.li : "li";
      const itemVariants = mobile
        ? {
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
          }
        : undefined;

      return (
        <ListItem
          key={item.id}
          variants={mobile ? itemVariants : undefined}
          className={mobile ? undefined : undefined}
        >
          <button
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex cursor-pointer items-center ${
              mobile
                ? "w-full justify-between rounded-xl px-4 py-3"
                : "px-2 py-2"
            }`}
            style={{ fontFamily: "IBM Plex Mono" }}
          >
            <span className="relative inline-flex items-center">
              <span
                className={`text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active
                    ? "font-bold text-[#17352B]"
                    : "text-[#555] group-hover:text-[#17352B]"
                }`}
              >
                {item.name}
              </span>

              <span
                className={`absolute -bottom-[6px] left-0 h-[2px] w-full origin-left rounded-full bg-[#E66A2C] transition-transform duration-300 ${
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </span>

            {mobile && active && (
              <span className="text-sm text-[#E66A2C] transition-transform duration-300">
                →
              </span>
            )}
          </button>
        </ListItem>
      );
    });

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${
          sticky ? "bg-[#F5F2EA]/95 shadow-md backdrop-blur-sm" : "bg-[#F5F2EA]"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-360 items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            aria-label="Go to home"
            className="flex shrink-0 cursor-pointer items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center bg-[#17352B] rounded-sm">
              <img
                src={logo}
                alt="Soil Packaging"
                draggable={false}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-left leading-none">
              <h2 className="whitespace-nowrap text-base font-bold uppercase tracking-wide text-[#17352B] sm:text-lg lg:text-xl">
                SOIL PACKAGING
              </h2>
              <p
                className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#B78A54]"
                style={{ fontFamily: "IBM Plex Mono" }}
              >
                & TRIMS LTD.
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {renderNavItems()}
            </ul>
          </nav>

          {/* Right Side CTA & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-4">
            {/* Desktop CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden bg-[#E66A2C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#d95c20] rounded-sm lg:block"
              style={{ fontFamily: "IBM Plex Mono" }}
            >
              REQUEST QUOTE
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="cursor-pointer p-2 text-[#17352B] transition-colors hover:text-[#E66A2C] lg:hidden"
            >
              {mobileOpen ? (
                <HiOutlineXMark size={28} />
              ) : (
                <HiOutlineBars3 size={28} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ originY: 0 }}
                className="absolute left-0 top-20 w-full bg-[#F5F2EA] shadow-xl lg:hidden"
              >
                <nav className="flex flex-col space-y-4 px-6 py-6">
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.08,
                          delayChildren: 0.1,
                        },
                      },
                      exit: {
                        opacity: 0,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {renderNavItems(true)}
                  </motion.ul>

                  <motion.div
                    className="mt-4 border-t border-[#DDD5C8] pt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                  >
                    <button
                      onClick={() => {
                        scrollToSection("contact");
                        setMobileOpen(false);
                      }}
                      className="w-full bg-[#E66A2C] py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#d95c20] rounded-sm"
                      style={{ fontFamily: "IBM Plex Mono" }}
                    >
                      REQUEST QUOTE
                    </button>
                  </motion.div>
                </nav>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 top-20 z-40 bg-black/20 lg:hidden"
                onClick={() => setMobileOpen(false)}
              />
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
