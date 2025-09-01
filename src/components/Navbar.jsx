import React, { useEffect, useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import CV from "../assets/CV/CV_AryoBimoPrakoso.pdf";
import { useCursor } from "../CustomCursor";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollState, setScrollState] = useState({
    isTop: true,
    shadow: false,
  });
  const { setCursorVariant } = useCursor();
  const { pathname } = useLocation();
  const threshold = 100;

  // scroll logic
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollState({
        isTop: y < threshold,
        shadow: y >= threshold,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // cek route
  const isProjectList = pathname === "/my-project";
  const isProjectDetail = matchPath("/my-project/:id/:titleSlug", pathname);

  // logic tampil navbar
  let showNavbar = true;

  // Project list -> selalu tampil
  if (isProjectList) {
    showNavbar = true;
  }

  // Project detail -> ikutin scroll juga, jangan auto true
  if (isProjectDetail) {
    showNavbar = !scrollState.isTop;
  }

  console.log("pathname:", pathname);
  console.log(
    "isProjectList:",
    isProjectList,
    "isProjectDetail:",
    isProjectDetail
  );
  console.log("isTop:", scrollState.isTop, "showNavbar:", showNavbar);

  return (
    <div
      className={`fixed top-0 z-[999] left-0 right-0 px-[30px] py-8 md:px-[100px] bg-[#f6f6f6] h-[50px] w-full flex items-center justify-between transition-all ease-in-out duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${scrollState.shadow ? "shadow-md" : ""}`}
    >
      <div className="text-[32px]">
        <Link to="/">
          <button
            className="cursor-pointer"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            aryo
          </button>
        </Link>
      </div>
      <ul
        className={`
          ${nav ? "top-[65px] bg-[#f6f6f6] z-40" : "top-[-300px]"}
          md:flex gap-6 md:items-center py-4 px-[30px]
          fixed md:static left-0 w-full md:w-auto
          transition-all ease-in duration-300 text-[20px] 
        `}
      >
        <li className="hover:bg-[#ececec] px-2 py-1 transition ease-in-out duration-400 rounded-lg">
          <Link
            to="/my-project"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Project
          </Link>
        </li>
        <li className="hover:bg-[#ececec] px-2 py-1 transition ease-in-out duration-400 rounded-lg">
          <Link
            to="/contact"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Contact
          </Link>
        </li>
        <li className="hover:bg-[#ececec] px-2 py-1 transition ease-in-out duration-400 rounded-lg">
          <a
            href={CV}
            download
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            CV/Resume
          </a>
        </li>
      </ul>
      <div
        className="flex md:hidden text-2xl font-bold cursor-pointer px-8"
        onClick={() => setNav(!nav)}
      >
        {nav ? <IoClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
