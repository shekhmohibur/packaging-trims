import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const hashId = location.hash.replace("#", "");

    if (hashId) {
      setTimeout(() => {
        document.getElementById(hashId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return;
    }

    if (location.pathname === "/") return;

    const sectionId = location.pathname.replace("/", "");

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
