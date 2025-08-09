import React from "react";
import FigmaSVG1 from "../assets/svg/figma.svg"
import ReactSVG1 from "../assets/svg/react.svg"
import JsSVG1 from "../assets/svg/javascript.svg"
import TailwindSVG1 from "../assets/svg/tailwind.svg"

const Skills = () => {
  return (
    <>
      <div id="skills" className="h-full bg-color px-[16px] lg:px-[56px] py-[40px] overflow-x-hidden">
        <div className="w-full flex flew-row justify-around gap-4 lg:gap-12 h-full py-8 lg:py-16 border-[#0F0F0F] border-t-1 border-b-1">
            <div className="flex flex-row justify-center items-center gap-1 lg:gap-3 grayscale hover:grayscale-0 transition duration-300 hover:scale-110">
              <img
                src={FigmaSVG1}
                alt="Figma"
                className="w-7 md:w-10 lg:w-24"
              />
              <h2 className="lg:text-3xl">Figma</h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-1 lg:gap-3 grayscale hover:grayscale-0 transition duration-300 hover:scale-110">
              <img
                src={ReactSVG1}
                alt="React"
                className="w-7 md:w-10 lg:w-24"
              />
              <h2 className="lg:text-3xl">React</h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-1 lg:gap-3 grayscale hover:grayscale-0 transition duration-300 hover:scale-110">
              <img
                src={TailwindSVG1}
                alt="Tailwind"
                className="w-7 md:w-10 lg:w-24"
              />
              <h2 className="lg:text-3xl">Tailwind</h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-1 lg:gap-3 grayscale hover:grayscale-0 transition duration-300 hover:scale-110">
              <img
                src={JsSVG1}
                alt="Javascript"
                className="w-7 md:w-10 lg:w-24"
              />
              <h2 className="lg:text-3xl">Javascript</h2>
            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
