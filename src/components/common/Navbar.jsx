import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";

const navItems = [
  { name: "ABOUT", path: "/about" },
  { name: "PRODUCTS", path: "/products" },
  { name: "MANUFACTURING", path: "/manufacturing" },
  { name: "SUSTAINABILITY", path: "/sustainability" },
  { name: "QUALITY", path: "/quality" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="max-w-360 mx-auto px-5 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-[34px] h-[34px] rounded-[3px] bg-[#17352B] flex items-center justify-center text-white font-black text-[15px]">
                S
              </div>

              <div className="leading-none">
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
                  &amp; TRINS LTD.
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative pb-2 uppercase text-[12px] tracking-[0.08em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#17352B]"
                        : "text-[#252525] hover:text-[#17352B]"
                    }`
                  }
                  style={{ fontFamily: "IBM Plex Mono" }}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`
          absolute
          left-0
          bottom-[-6px]
          h-[2px]
          w-full
          rounded-full
          bg-[#E66A2C]
          origin-center
          transition-transform
          duration-300
          ease-out
          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}

            <div className="hidden xl:flex items-center">
              {user ? (
                <div className="flex gap-4 items-center">
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
                <Link
                  to="/contact"
                  className="bg-[#E66A2C] hover:bg-[#d95c20] text-white px-7 py-3 uppercase text-xs tracking-[0.08em] transition hover:-translate-y-0.5"
                  style={{ fontFamily: "IBM Plex Mono" }}
                >
                  REQUEST QUOTE
                </Link>
              )}
            </div>

            {/* Mobile Button */}

            <button onClick={() => setMobileOpen(true)} className="xl:hidden">
              <HiOutlineBars3 size={30} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}

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
                <Link
                  to="/"
                  className="text-white uppercase text-xl font-bold"
                  style={{ fontFamily: "Barlow Condensed" }}
                >
                  SOIL
                </Link>

                <button onClick={() => setMobileOpen(false)}>
                  <HiOutlineXMark className="text-white" size={34} />
                </button>
              </div>

              <div className="flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#F6F1E6] border-b border-white/15 py-4 uppercase text-[34px] font-semibold"
                    style={{ fontFamily: "Barlow Condensed" }}
                  >
                    {item.name}
                  </NavLink>
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
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full bg-[#E66A2C] py-4 text-center uppercase text-white tracking-widest text-sm"
                    style={{ fontFamily: "IBM Plex Mono" }}
                  >
                    REQUEST QUOTE
                  </Link>
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
