import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpLeft} from "react-icons/go";

const notFound = () => {
  return (
    <div className="h-screen lg:mt-[100px] mt-[70px]">
      <div className="pl-[56px] pt-[56px]">
        <button className="flex justify-around w-max gap-2 items-center py-2 px-4 bg-[#0f0f0f] rounded-xl text-[#f6f6f6] hover:scale-110 transition ease-in-out duration-300 mt-4 text-2 text-sm lg:text-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
          
          <span>
            <GoArrowUpLeft />
          </span>
          <Link to="/">Back</Link>
        </button>
      </div>
      <div className="h-max flex justify-center">
        <h1 className="text-5xl lg:text-9xl text-center">
          PAGE <br />
          NOT FOUND! 🤷‍♂️
        </h1>
      </div>
    </div>
  );
};

export default notFound;
