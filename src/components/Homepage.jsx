import React, { useEffect, useState } from "react";
import profil from "../assets/foto/profil-coba.jpg";
import LinkedinSVG from "../assets/svg/linkedin-svgrepo-com.svg";
import DribbleSVG from "../assets/svg/dribble.svg";
import InstagramSVG from "../assets/svg/instagram.svg";
import { motion } from "framer-motion";

const Homepage = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div id="home" className="mt-16 flex flex-col min-h-screen">
          <div className="flex flex-row-reverse lg:flex-row w-full h-full">
            {/* Content Section */}
            <div className="w-full lg:w-full flex flex-col justify-center px-6 sm:px-8 lg:pl-12 order-2 lg:order-1">
              <div className="mt-6 lg:mt-12">
                <div className="text-2xl sm:text-3xl lg:text-4xl">Hi there! 👋</div>
                <div className="leading-tight text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-left font-[SFUIText] mt-4">
                  I'm Aryo Bimo
                  <br />
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    UI/UX Designer & <br /> Front-End Developer
                  </span>
                </div>
                <div className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
                  I enjoy turning creative interface designs into interactive
                  websites. <br className="hidden sm:block" /> I'm driven by curiosity, always exploring new
                  ways to build and improve digital experiences.
                </div>
              </div>
              
              {/* Social Media Links */}
              <ul className="items-center flex gap-3 mt-6 lg:mt-4 justify-start lg:justify-start">
                <li className="hover:scale-125 lg:hover:scale-150 ease-in-out duration-300 cursor-pointer">
                  <a href="https://dribbble.com/aryobimop" target="_blank" rel="noopener noreferrer">
                    <img src={DribbleSVG} className="w-8 sm:w-10" alt="Dribbble" />
                  </a>
                </li>
                <li className="hover:scale-125 lg:hover:scale-150 ease-in-out duration-300 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/aryo-bimo-prakoso-746001347/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={LinkedinSVG} className="w-8 sm:w-10" alt="LinkedIn" />
                  </a>
                </li>
                <li className="hover:scale-125 lg:hover:scale-150 ease-in-out duration-300 cursor-pointer">
                  <a href="https://www.instagram.com/aryoobp/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramSVG} className="w-8 sm:w-10" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Profile Image Section */}
            <div className="w-xl lg:w-[560px]  flex justify-center items-center p-6 sm:p-8 lg:p-4 order-1 lg:order-2">
              <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src={profil}
                  alt="Profil"
                  className="w-full h-auto object-cover rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;