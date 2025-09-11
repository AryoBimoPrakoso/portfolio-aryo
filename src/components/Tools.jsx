import React from "react";
import { motion } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent";
import { toolSVG } from "../data/data";

const Tools = () => {
  return (
    <>

      <div
        id="skills"
        className="h-full flex bg-color px-[16px] lg:px-[56px] py-8 lg:py-32 overflow-x-hidden"
      >
        {toolSVG.map((tool, index) => (
          <div key={tool.id} className="w-full justify-around gap-4 lg:gap-12 h-full py-4 lg:py-8 border-gray-300 border-y-1">
            <AnimatedComponent delay={index * 0.2}>
              <div className="flex  justify-center items-center gap-1 lg:gap-3 lg:grayscale hover:grayscale-0 transition duration-300 hover:scale-110">
                <img
                  src={tool.svg}
                  alt="Figma"
                  className="w-7 md:w-10 lg:w-16"
                />
                <h2 className="lg:text-3xl">{tool.title}</h2>
              </div>
            </AnimatedComponent>
          </div>
        ))} 
      </div>

    </>
  );
};

export default Tools;
