import React from "react";
import { Link } from "react-router-dom";
import { dataProject } from "../data/data";

const MyProjectFe = () => {
  return (
    <div className="mt-[100px]">
      <div className="flex gap-4 p-14">
        {dataProject.map((project) => (
          <div key={project.id} className="bg-red-500">
            <Link to={`/my-project/${project.id}/${project.title}`}>
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

export default MyProjectFe;
