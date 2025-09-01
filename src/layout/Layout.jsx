import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const { pathname } = useLocation();
  const [isTop, setIsTop] = useState(true);
  const ticking = useRef(false);
  const threshold = 100;

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setIsTop(window.scrollY < threshold);
        ticking.current = false;
      });
    };

    // Set awal (ketika pindah route tanpa scroll)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMyProjec = pathname === '/my-project';
  const showNavbar = !(onMyProjec && isTop);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 right-0 px-[30px] md:px-[100px] w-full md:w-full lg:w-full z-[999] flex items-center justify-between transition-all ease-in-out duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>
      <Outlet context={{ isTop, threshold }} />
    </div>
  );
};

export default Layout;
