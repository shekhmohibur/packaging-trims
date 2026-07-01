import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";

const navItems = [
  { name: "ABOUT", id: "about" },
  { name: "PRODUCTS", id: "products" },
  { name: "MANUFACTURING", id: "manufacturing" },
  { name: "SUSTAINABILITY", id: "sustainability" },
  { name: "QUALITY", id: "quality" },
  { name: "GALLERY", id: "gallery" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const offset = 80;

    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 z-50 w-full border-b border-[#ddd4c7] transition-all duration-300 ${
          sticky
            ? "bg-[#F6F1E6]/95 backdrop-blur-md shadow-sm"
            : "bg-[#F6F1E6]/92 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8">

          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <button
              onClick={scrollTop}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-[34px] h-[34px] rounded-[3px] bg-[#17352B] flex items-center justify-center text-white font-black text-[15px]">
                S
              </div>

              <div className="leading-none text-left">

                <h2
                  className="uppercase text-[#17352B] font-bold tracking-wide text-[22px]"
                  style={{ fontFamily: "Barlow Condensed" }}
                >
                  SOIL PACKAGING
                </h2>

                <p
                  className="uppercase text-[9px] tracking-[0.22em] text-[#B78A54] mt-1"
                  style={{ fontFamily: "IBM Plex Mono" }}
                >
                  & TRINS LTD.
                </p>

              </div>
            </button>

            {/* Desktop Navigation */}

            <nav className="hidden xl:flex items-center gap-8">

              {navItems.map((item) => (

                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group pb-2 uppercase text-[12px] tracking-[0.08em] transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-[#17352B]"
                      : "text-[#444] hover:text-[#17352B]"
                  }`}
                  style={{ fontFamily: "IBM Plex Mono" }}
                >
                  {item.name}

                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-[#E66A2C]"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}
                </button>

              ))}

            </nav>

            {/* Right Side */}

            <div className="hidden xl:flex items-center">

              {user ? (
                <div className="flex items-center gap-4">

                  <Link
                    to="/dashboard"
                    className="uppercase text-xs tracking-widest"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={logoutUser}
                    className="bg-[#E66A2C] hover:bg-[#d95c20] text-white px-6 py-3 uppercase text-xs tracking-widest transition"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Logout
                  </button>

                </div>
              ) : (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#E66A2C] hover:bg-[#d95c20] text-white px-7 py-3 uppercase text-xs tracking-[0.08em] transition hover:-translate-y-0.5"
                  style={{ fontFamily: "IBM Plex Mono" }}
                >
                  REQUEST QUOTE
                </button>
              )}

            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden"
            >
              <HiOutlineBars3 size={30} />
            </button>

          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#17352B]"
          >
            <div className="px-6 py-6 h-full flex flex-col">

              <div className="flex justify-between items-center mb-12">

                <button
                  onClick={scrollTop}
                  className="text-white uppercase text-xl font-bold"
                  style={{ fontFamily: "Barlow Condensed" }}
                >
                  SOIL
                </button>

                <button
                  onClick={() => setMobileOpen(false)}
                >
                  <HiOutlineXMark
                    className="text-white"
                    size={34}
                  />
                </button>

              </div>

              <div className="flex flex-col">

                {navItems.map((item) => (

                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`border-b border-white/15 py-4 text-left uppercase text-[34px] font-semibold ${
                      activeSection === item.id
                        ? "text-[#E66A2C]"
                        : "text-[#F6F1E6]"
                    }`}
                    style={{ fontFamily: "Barlow Condensed" }}
                  >
                    {item.name}
                  </button>

                ))}

              </div>

              <div className="mt-auto">

                {user ? (

                  <button
                    onClick={() => {
                      logoutUser();
                      setMobileOpen(false);
                    }}
                    className="w-full bg-[#E66A2C] py-4 uppercase text-white tracking-widest text-sm"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Logout
                  </button>

                ) : (

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-[#E66A2C] py-4 uppercase text-white tracking-widest text-sm"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    REQUEST QUOTE
                  </button>

                )}

              </div>
            </div>
          </motion.div>

        )}

      </AnimatePresence>

      <div className="h-20" />
    </>
  );
};

export default Navbar;