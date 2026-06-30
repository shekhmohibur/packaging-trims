import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";

const menuItems = [
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Our Story",
    path: "/story",
  },
  {
    name: "Sustainability",
    path: "/sustainability",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isSticky
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-20">
            {/* Logo */}

            <Link
              to="/"
              className="justify-self-start font-serif text-3xl lg:text-4xl font-semibold text-[#1E311B]"
            >
              Soil of Our Faith
            </Link>

            {/* Desktop Menu */}

            <div className="hidden lg:flex justify-self-center items-center gap-12">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[15px] font-medium transition duration-300 pb-1
                    ${
                      isActive
                        ? "text-[#1E311B]"
                        : "text-gray-700 hover:text-[#1E311B]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#1E311B] transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Side */}

            <div className="hidden lg:flex justify-self-end items-center gap-4">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-[#1E311B] font-medium hover:text-black transition"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={logoutUser}
                    className="px-5 py-3 rounded-md border border-[#1E311B] text-[#1E311B] font-semibold hover:bg-[#1E311B] hover:text-white transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-[#1E311B] font-medium hover:text-black transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/contact"
                    className="bg-[#1E311B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#2B4728] transition duration-300"
                  >
                    Inquire Now
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden justify-self-end text-[#1E311B]"
            >
              {mobileOpen ? (
                <HiOutlineXMark size={32} />
              ) : (
                <HiOutlineBars3 size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-md"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium transition
                      ${
                        isActive
                          ? "text-[#1E311B]"
                          : "text-gray-700 hover:text-[#1E311B]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                <div className="border-t pt-5 flex flex-col gap-3">
                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        onClick={() => setMobileOpen(false)}
                        className="font-medium text-[#1E311B]"
                      >
                        Dashboard
                      </Link>

                      <button
                        onClick={() => {
                          logoutUser();
                          setMobileOpen(false);
                        }}
                        className="w-full py-3 rounded-md border border-[#1E311B] text-[#1E311B] font-semibold"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setMobileOpen(false)}
                        className="font-medium text-[#1E311B]"
                      >
                        Login
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="bg-[#1E311B] text-center text-white py-3 rounded-md font-semibold"
                      >
                        Inquire Now
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}

      <div className="h-20" />
    </>
  );
};

export default Navbar;
