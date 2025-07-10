import React from "react";
import FigmaSVG from "../assets/svg/-2.svg";
import ReactSVG from "../assets/svg/react.svg";
import TailwindSVG from "../assets/svg/tailwind.svg";
import AryoSVG from "../assets/svg/Aryo-Icon.svg";

const Skills = () => {
  return (
    <>
      <div id="skills" className="h-full">
        <div className="flex flex-row w-full justify-between p-6">
          <div className="text-4xl">
            These are the <span className="font-bold">tools ⚙️</span> <br />I
            rely on to bring ideas to life
          </div>
          <div className="text-4xl text-right">
            —both in design and <br />
            development.
          </div>
        </div>
        <div className="flex w-full ">
          <div className="bg-[#e4e2e2]  flex flex-row m-6 w-full rounded-2xl inset-shadow-2xs p-6">
            <div className="flex flex-col gap-4 i p-6">
              <div className="bg-[#F2F2F2] p-4 rounded-full w-fit inset-shadow-2xs">
                <img src={FigmaSVG} alt="Figma Icon" className="w-15" />
              </div>

              <div className="font-bold text-2xl">
                Figma
                <div className="font-normal text-xl mt-4">
                  Mengembangkan desain antarmuka dengan mengedepankan kenyamanan
                  pengguna dan konsistensi desain
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center p-6">
              <div className="bg-[#F2F2F2] p-4 rounded-full inset-shadow-2xs">
                <img src={ReactSVG} alt="Figma Icon" className="w-15" />
              </div>

              <div className="text-center font-bold text-2xl">
                React
                <div className="text-center font-normal text-xl mt-4">
                  Mengembangkan desain antarmuka dengan mengedepankan kenyamanan
                  dan konsistensi desain
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-end p-4">
              <div className="bg-[#F2F2F2] p-4 rounded-full inset-shadow-2xs">
                <img src={TailwindSVG} alt="Figma Icon" className="w-15" />
              </div>

              <div className="text-end font-bold text-2xl">
                Tailwind CSS
                <div className="text-end font-normal text-xl mt-4">
                  Mengembangkan desain antarmuka dengan mengedepankan kenyamanan
                  pengguna dan konsistensi desain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
