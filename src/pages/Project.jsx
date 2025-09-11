import React from "react";
import { Link } from "react-router-dom";
import { dataProject } from "../data/data";
import AnimatedComponent from "../components/AnimatedComponent";
import { useCursor } from "../CustomCursor";

const ProjectFe = () => {
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
    <div className="mt-[100px] w-full">
      <div className="flex flex-col leading-tight px-14 gap-4 w-full" onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}>
        <h1 className="text-2xl lg:text-6xl">My Project</h1>
        <p className="text-lg lg:text-2xl">This is my portfolio project, which is a practice project to train me to become a front-end developer.</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4 items-cener p-14">
        {dataProject.map((project, index) => (
          <Link to={`/my-project/${project.id}/${createSlug(project.title)}`}>
            <AnimatedComponent
              key={project.id}
              delay={index * 0.3}
              className="max-w-sm mx-auto p-2 bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <div className="relative" onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}>
                <img src={project.thumbnail} alt={project.title} className="w-full h-72 object-cover rounded-2xl" />
              </div>

              {/* konten */}

              <h2 className="p-2 text-lg">{project.title}</h2>

            </AnimatedComponent>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectFe;
