import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useCursor } from "../CustomCursor";
import { dataDesignUI } from "../data/data";
import AnimatedComponent from "./AnimatedComponent";

const Design = () => {
  const { setCursorVariant } = useCursor();

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w-]+/g, "") // Remove non-word and non-hyphen characters
      .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
      .replace(/^-+/, "") // Remove leading hyphens
      .replace(/-+$/, ""); // Remove trailing hyphens
  };
  return (
    <div id="project" className="w-full h-full pt-12 lg:pt-24 pb-12 bg-color">
      <div className="px-14">
        <AnimatedComponent>
          <div
            className="lg:text-[64px] pb-4 w-max"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Let’s Explore My Design Style
            <br />
            Through These Work 🙌
          </div>
        </AnimatedComponent>

        {/* Untuk Desktop */}
        <div className="w-full bg-[#e6e6e6] rounded-md">
          <div className="p-2 w-full h-full hidden lg:grid grid-cols-3 auto-rows-[250px] gap-4">
            {dataDesignUI.map((design, index) => (
              <>
                <AnimatedComponent
                  key={design.id}
                  delay={index * 0.2} // animasi berurutan
                  className={`
      relative group overflow-hidden rounded-md
      ${index === 0 ? "row-span-3" : ""} 
      ${index === 3 ? "row-span-2 col-span-2" : ""}
    `}
                >
                  <img
                    src={design.thumbnail}
                    alt={design.title}
                    className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {design.title}
                    </h3>
                    <button className="px-4 py-2 bg-white text-black rounded-md hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Link
                        to={`/design/${design.id}/${createSlug(design.title)}`}
                      >
                        More
                      </Link>
                    </button>
                  </div>
                </AnimatedComponent>
              </>
            ))}
          </div>
        </div>
        <div className="flex gap-3 flex-col lg:hidden">
          {dataDesignUI.map((design, index) => (
            <Link to={`/design/${design.id}/${createSlug(design.title)}`}>
              <AnimatedComponent
                delay={index * 0.2}
                className="flex justify-between border-b-1"
                key={design.id}
              >
                <h1>{design.title}</h1>
                <GoArrowUpRight />
              </AnimatedComponent>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
