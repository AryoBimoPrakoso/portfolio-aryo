import React from "react";
import { Link } from "react-router-dom";
import { dataProject } from "../data/data";

const ProjectFe = () => {
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
    <div className="mt-[100px] w-full">
      <div className="flex w-full gap-4 justify-center items-cener p-14">
        <h1 className="text-3xl">Coming Soon!🙇‍♂️</h1>
      </div>
    </div>
  );
};

export default ProjectFe;
