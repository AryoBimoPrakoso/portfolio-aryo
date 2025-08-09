import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import CV from "../assets/CV/CV_AryoBimoPrakoso.pdf";
import { Link } from "react-router-dom";

const Navbar = ({ setIndex }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    // Optional cleanup
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 px-[30px] md:px-[100px] bg-[#f6f6f6] lg:h-[100px] md:h-[130px] h-[70px] w-[425px] md:w-full lg:w-full z-[1000] flex items-center justify-between transition-shadow duration-300 ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <div className="text-[32px]">
        <button
          className="cursor-pointer"
          onClick={() => setIndex(0)}
          onMouseEnter={() =>
            window.dispatchEvent(new Event("cursor-text-enter"))
          }
          onMouseLeave={() =>
            window.dispatchEvent(new Event("cursor-text-leave"))
          }
        >
          aryo
        </button>
      </div>
      <ul
        className={`
        ${nav ? "top-[65px] bg-[#f6f6f6]" : "top-[-300px]"}
        md:flex gap-6 md:items-center md:pb-0 py-4 lg:pb-4 px-[30px]
        fixed md:static left-0 w-full md:w-auto
        transition-all ease-in duration-300 z-[10] text-[20px] 
      `}
      >
        <li className="hover:bg-[#0f0f0f] hover:text-[#e6e6e6] text-[16px] lg:text-[20px] transition duration-300 rounded-xl cursor-pointer p-2">
          <a
            href={CV}
            download
            onMouseEnter={() =>
              window.dispatchEvent(new Event("cursor-text-enter"))
            }
            onMouseLeave={() =>
              window.dispatchEvent(new Event("cursor-text-leave"))
            }
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
