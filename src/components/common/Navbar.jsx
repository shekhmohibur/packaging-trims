import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";
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
  const { user, logoutUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const offset = 100;

    const scrollToTarget = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `/#${id}`);
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scrollToTarget, 250);
    } else {
      scrollToTarget();
    }

    setMobileOpen(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  const renderNavItems = () =>
    navItems.map((item) => {
      const isActiveItem = activeSection === item.id;

      return (
        <li key={item.id}>
          <button
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center justify-between rounded-xl px-4 py-3 text-left uppercase tracking-[0.12em] transition-all duration-300 lg:rounded-none lg:px-0 lg:py-0 ${
              isActiveItem
                ? "bg-[#17352B] text-[#E66A2C] lg:bg-transparent"
                : "bg-white text-[#17352B] hover:bg-[#f3e9da] lg:bg-transparent lg:text-[#444] lg:hover:text-[#17352B]"
            }`}
            style={{ fontFamily: "IBM Plex Mono" }}
          >
            <span className="text-sm font-semibold lg:text-[12px]">
              {item.name}
            </span>

            {isActiveItem ? (
              <motion.span
                layoutId="nav-indicator"
                className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#E66A2C] lg:bottom-[-8px]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            ) : (
              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#E66A2C] transition-transform duration-300 ease-out group-hover:scale-x-100 lg:bottom-[-8px]" />
            )}
          </button>
        </li>
      );
    });

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed left-0 top-0 z-50 w-full border-b border-[#ddd4c7] transition-all duration-300 ${
          sticky
            ? "bg-[#F6F1E6]/95 shadow-sm backdrop-blur-md"
            : "bg-[#F6F1E6]/92 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 lg:px-8">
          <button
            onClick={scrollTop}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-8.5 w-8.5 items-center justify-center rounded-[3px] bg-[#17352B] text-[15px] font-black text-white">
              <img src={logo} alt="" />
            </div>

            <div className="text-left leading-none">
              <h2 className="text-[22px] font-bold uppercase tracking-wide text-[#17352B]">
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

          <div className="flex items-center gap-3">
            <nav
              aria-label="Primary navigation"
              className={`${
                mobileOpen ? "flex" : "hidden"
              } fixed inset-x-4 top-24 z-50 flex-col rounded-[24px] border border-[#ddd4c7] bg-[#F6F1E6] p-3 shadow-xl lg:static lg:inset-auto lg:flex lg:flex-row lg:items-center lg:gap-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
            >
              <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
                {renderNavItems()}
              </ul>

              <div className="mt-4 flex flex-col gap-3 border-t border-[#E7DDCF] pt-4 lg:hidden">
                {user ? (
                  <button
                    onClick={() => {
                      logoutUser();
                      setMobileOpen(false);
                    }}
                    className="w-full rounded-xl bg-[#E66A2C] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d95c20]"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full rounded-xl bg-[#17352B] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#0f2d25]"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Request Quote
                  </button>
                )}
              </div>
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-xs uppercase tracking-widest text-[#17352B]"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={logoutUser}
                    className="bg-[#E66A2C] px-6 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-[#d95c20]"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#E66A2C] px-7 py-3 text-xs uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#d95c20]"
                  style={{ fontFamily: "IBM Plex Mono" }}
                >
                  REQUEST QUOTE
                </button>
              )}
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-full border border-[#D9D1C6] bg-white/70 p-2.5 text-[#17352B] shadow-sm transition hover:border-[#E66A2C] hover:text-[#E66A2C] lg:hidden"
            >
              {mobileOpen ? (
                <HiOutlineXMark size={24} />
              ) : (
                <HiOutlineBars3 size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0F2D25]/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
