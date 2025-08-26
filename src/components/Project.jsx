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
      <div className="px-14">
        <div
          className="lg:text-[64px] pb-4 w-max"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Let’s Explore My Design Style
          <br />
          Through These Work 🙌
        </div>
        {/* Untuk Desktop */}
        <div className="w-full bg-[#e6e6e6] rounded-md">
          <div className="hidden lg:grid grid-flow-col grid-rows-3 md:grid-flow-col md:grid-rows-1 gap-4 p-2">
            {/* E-WALLET */}
            <div className="relative group row-span-2 overflow-hidden rounded-md">
              <img
                src={Ewallet}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">E-Wallet</h3>
                <button className="px-4 py-2 bg-white text-black rounded-md hover:scale-120 transition-all duration-300 cursor-pointer">
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
                <button className="px-4 py-2 bg-white text-black rounded-md hover:scale-120 transition-all duration-300 cursor-pointer">
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
                <button className="px-4 py-2 bg-white text-black rounded-md hover:scale-120 transition-all duration-300 cursor-pointer">
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
                <button className="px-4 py-2 bg-white text-black rounded-md hover:scale-120 transition-all duration-300 cursor-pointer">
                  <Link to="/myAgro">More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Untuk Mobile */}
        <div className="lg:hidden flex flex-col">
          <Link to="/runTracker">
            <div className="w-full flex flex-row gap-4 border-b-1 py-6 ">
              <img
                src={RunTracker}
                alt="Run Tracker Design"
                className="w-12 rounded-sm"
              />
              <h2 className="flex flex-row justify-between items-center w-full text-md">
                Run-Tracker
                <span>
                  <GoArrowUpRight />
                </span>
              </h2>
            </div>
          </Link>

          <Link to="/myAgro">
            <div className="w-full flex flex-row gap-4 border-b-1 py-4">
              <img
                src={Lahan}
                alt="Run Tracker Design"
                className="w-12 rounded-sm"
              />
              <h2 className="flex flex-row justify-between items-center w-full text-md">
                Assistant App
                <span>
                  <GoArrowUpRight />
                </span>
              </h2>
            </div>
          </Link>

          <Link to="/siKopi">
            <div className="w-full flex flex-row gap-4 border-b-1 py-4 ">
              <img
                src={Kopi}
                alt="Run Tracker Design"
                className="w-12 rounded-sm"
              />
              <h2 className="flex flex-row justify-between items-center w-full text-md">
                Website Profile Company
                <span>
                  <GoArrowUpRight />
                </span>
              </h2>
            </div>
          </Link>

          <Link to="/eWallet">
            <div className="w-full flex flex-row gap-4 border-b-1 py-4">
              <img
                src={Ewallet}
                alt="Run Tracker Design"
                className="w-12 rounded-sm"
              />
              <h2 className="flex flex-row justify-between items-center w-full text-md">
                e-Wallet
                <span>
                  <GoArrowUpRight />
                </span>
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
