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
    <div className="mt-[100px]">
      <div className="flex gap-4 p-14">
        {dataProject.map((project) => (
          <div key={project.id} className="bg-red-500">
            <Link to={`/my-project/${project.id}/${createSlug(project.title)}`}>
              <div className="p-12">
                <h1>{project.title}</h1>
                <img src={project.thumbnail} alt="" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFe;
