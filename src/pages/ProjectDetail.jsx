import React, { useEffect, useRef, useState } from "react";
import Video from "../assets/video/0822.mp4";
import { dataProject } from "../data/data";
import { useParams } from "react-router-dom";
import AnimatedComponent from "../components/AnimatedComponent";
import { useCursor } from "../CustomCursor";
import { FaCode } from "react-icons/fa6";

const ProjectDetail = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState(null);
  const { id, titleSlug } = useParams();
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const projectDetail = dataProject.find((p) => p.id === parseInt(id));
    setProject(projectDetail);
  }, [id, titleSlug]);

  const handlePlay = () => {
    if (playing) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      {project ? (
        <div className="relative min-h-screen">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="fixed inset-0 w-full h-screen object-cover z-[-1]"
          />
          <div className="relative z-10 min-h-screen">
            {/* Placeholder untuk video (memastikan konten dimulai setelah video) */}
            <div className="h-screen flex items-center justify-center">
              <AnimatedComponent className="text-4xl font-semibold text-white bg-black/50 p-4 rounded-xl">
                {project.title}
              </AnimatedComponent>
            </div>
            {/* Konten tambahan dengan animasi saat di-scroll */}
            <div className="min-h-screen bg-white  p-8 transition-all duration-1000 ease-in-out">
              <h2 className="text-3xl font-semibold mb-4 animate-slide-up">
                {project.title}
              </h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <video
                  ref={ref}
                  onClick={handlePlay}
                  autoPlay
                  controls
                  className="w-full lg:w-1/2 rounded-xl h-max"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                <div className="flex flex-col pt-4">
                  <div className="flex gap-2 py-2">
                    {project.tools.map((tool) => (
                      <div key={tool.id}><img src={tool.icon} alt={tool.id} className="w-4 lg:w-8 hover:scale-110 duration-300" /></div>
                    ))}
                  </div>
                  <p className="lg:text-[24px]" onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}>
                    {project.description.A}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 py-8">
                <img src={project.image.image1} alt="" className="order-1 lg:order-2 lg:w-1/2 rounded-xl" />
                <p className="order-2 lg:order-1 lg:text-[24px]" onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}>{project.description.B}</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <img src={project.image.image2} alt="" className="lg:w-1/2 rounded-xl" />
                <div className="block">
                  <p className="lg:text-[24px]" onMouseEnter={() => setCursorVariant("text")}
                    onMouseLeave={() => setCursorVariant("default")}>{project.description.C}</p>
                  <a
                    type="submit"
                    target="_blank"
                    className="flex justify-around w-max gap-2 items-center py-2 px-4 bg-[#0f0f0f] rounded-lg text-[#f6f6f6] hover:scale-110 transition ease-in-out duration-300 mt-4 text-2 text-sm lg:text-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    href={project.sourceCode}
                  >
                    Source Code
                    <span>
                      <FaCode />
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>Project not found!</p>
        </>
      )}
    </div>
  );
};
export default ProjectDetail;
