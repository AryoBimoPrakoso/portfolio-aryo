import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col px-[56px] gap-[20px] lg:gap-[40px]">
      <div>
        <h2 className="text-[32px] lg:text-[64px]">About</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
        <div className="flex flex-col gap-[16px] flex-1 lg:text-[32px]">
          <a href="https://www.linkedin.com/in/aryo-bimo-prakoso-746001347/" target="_blank" className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300 ">
            Linkedin
            <span>
              <GoArrowUpRight />
            </span>
          </a>
          <a href="https://www.instagram.com/aryoobp/" target="_blank" className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300">
            Instagram
            <span>
              <GoArrowUpRight />
            </span>
          </a>
          <a href="https://dribbble.com/aryobimop" target="_blank" className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300">
            Dribble
            <span>
              <GoArrowUpRight />
            </span>
          </a>
        </div>
        <p className="lg:w-1/2 flex-1 lg:text-[32px]">
          Hi there! I'm Aryo Bimo Prakoso a passionate and driven Informatics
          student with a keen interest in UI/UX design and front-end
          development. I enjoy creating user-friendly and aesthetically pleasing
          digital experiences, always striving to bridge the gap between design
          and functionality. I'm constantly learning and expanding my skill set
          to build impactful and accessible web interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
