import React from "react";
import RunTracker from "../assets/foto/Mockup-Run.png";
import Lahan from "../assets/foto/Mockup-Lahan.png";
import Kopi from "../assets/foto/landing-page.png";
import Ewallet from "../assets/foto/EWALLET.png";
import AryoIcon from "../assets/svg/Aryo-Icon.svg";

const Project = ({ setIndex }) => {
  return (
    <div id='project' className="w-full h-full mt-12">
      <div className="px-6">
        <div className="text-2xl mb-4">
          Let’s Explore <span className="font-bold">My Design</span> Style{" "}
          <br />
          Through These Works
        </div>
        <div className="w-full bg-[#e4e2e2] rounded-md">
          <div className="grid grid-flow-col grid-rows-3 md:grid-flow-col md:grid-rows-1 gap-4 p-2 ">
            {/* E-WALLET */}
            <div className="relative group row-span-2 overflow-hidden rounded-md">
              <img
                src={Ewallet}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-sm"
              />
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                <h3 className="text-lg font-semibold mb-2">E-Wallet</h3>
                <button
                  onClick={() => setIndex(1)}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  More
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
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Run Tracker</h3>
                <button
                  onClick={() => setIndex(2)}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  More
                </button>
              </div>
            </div>

            {/* KOPI */}
            <div className="relative group overflow-hidden rounded-md">
              <img
                src={Kopi}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-xl"
              />
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Website Profil Company</h3>
                <button
                  onClick={() => setIndex(3)}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  More
                </button>
              </div>
            </div>
            {/* MyAgro*/}
            <div className="relative group overflow-hidden rounded-md">
              <img
                src={Lahan}
                alt="Ewallet"
                className="object-cover w-full h-full transition-all duration-300 ease-in group-hover:blur-xl"
              />
              <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Asisstant App</h3>
                <button
                  onClick={() => setIndex(4)}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  More
                </button>
              </div>
            </div>

            <div>
              <img src={AryoIcon} alt="" className="w-[400px] m-auto" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
