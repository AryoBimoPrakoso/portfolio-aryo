import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

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
    <div className={`fixed top-0 left-0 right-0 px-[30px] md:px-[100px] bg-[#f2f2f2] lg:h-[150px] md:h-[130px] h-[70px] w-[425px] md:w-full lg:w-full z-[1000] flex items-center justify-between transition-shadow duration-300 ${shadow ? 'shadow-lg' : ''}`}>
      <div className="font-bold text-[24px]">
        <button className="cursor-pointer" onClick={() => setIndex(0)}>Aryo</button>
      </div>
      <ul className={`
        ${nav ? "top-[150px] " : "top-[-300px]"}
        md:flex gap-2 md:items-center md:pb-0 pb-12 px-[30px]
        fixed md:static left-0 w-full md:w-auto bg-[#f2f2f2]
        transition-all ease-in duration-300 z-[10]
      `}>
        <li className="hover:scale-100 cursor-pointer p-2">
          <a href="/#project">Projects</a>
        </li>
        <li className="hover:scale-100 cursor-pointer p-2">
          <a href="/#projects">CV/Resume</a>
        </li>
      </ul>
      <div className="flex md:hidden text-2xl font-bold cursor-pointer px-4" onClick={() => setNav(!nav)}>
        {nav ? <IoClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
