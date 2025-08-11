import React from "react";
import RunTracker from "../assets/foto/Mockup-Run.png";
import Lahan from "../assets/foto/Mockup-Lahan.png";
import Kopi from "../assets/foto/landing-page.png";
import Ewallet from "../assets/foto/EWALLET.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useCursor } from "../CustomCursor";

const Project = () => {
  const { setCursorVariant } = useCursor();
  return (
    <div id="project" className="w-full h-full pt-12 lg:pt-24 pb-12 bg-color">
      <div className="px-6">
        <div
          className="lg:text-[64px] pb-4 w-max"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Let’s Explore My Design Style
          <br />
          Through These Work 🙌
        </div>
        <div className="w-full bg-[#e4e2e2] rounded-md">
          <div className="flex flex-col lg:grid grid-flow-col grid-rows-3 md:grid-flow-col md:grid-rows-1 gap-4 p-2 ">
            {/* E-WALLET */}
            <div className="relative group row-span-2 overflow-hidden rounded-md">
              <img
                src={Ewallet}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">E-Wallet</h3>
                <button
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <Link to="/eWallet">More</Link>
                </button>
              </div>
            </div>
            {/* RUN TRACKER */}
            <div className="relative group overflow-hidden rounded-md">
              <img
                src={RunTracker}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-sm"
              />
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Run Tracker</h3>
                <button
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <Link to="/runTracker">More</Link>
                </button>
              </div>
            </div>

            {/* KOPI */}
            <div className="relative group col-span-2 overflow-hidden rounded-md">
              <img
                src={Kopi}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-xl"
              />
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Website Profil Company
                </h3>
                <button
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <Link to="/siKopi">More</Link>
                </button>
              </div>
            </div>
            {/* MyAgro*/}
            <div className="relative row-span-2 lg:row-auto group overflow-hidden rounded-md">
              <img
                src={Lahan}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-xl"
              />
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Asisstant App</h3>
                <button
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <Link to="/myAgro">More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
