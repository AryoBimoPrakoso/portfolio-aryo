import React, { useEffect, useRef, useState } from "react";
import Video from "../assets/video/0822.mp4";
import { dataProject } from "../data/data";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [video, setVideo] = useState(false);
  const [project, setProject] = useState(null);
  const { id, titleSlug } = useParams();

  useEffect(() => {
    const projectDetail = dataProject.find((p) => p.id === parseInt(id));
    setProject(projectDetail);
  }, [id, titleSlug]);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY >= 100) {
        setVideo(true);
      } else {
        setVideo(false);
      }
    };

    window.addEventListener("scroll", handleShow);

    return () => window.removeEventListener("scroll", handleShow);
  }, []);

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
          <video
            ref={ref}
            onClick={handlePlay}
            controls
            className={`fixed inset-0 w-full h-screen object-cover z-[-1]`}
          >
            <source src={project.video} type="video/mp4" />
          </video>
          <div className="h-screen relative z-10">{project.title}</div>
          <div className="h-screen relative z-10 bg-white">{project.title}</div>
          <div className="h-screen relative z-10">{project.title}</div>
          <div className="h-screen relative z-10">{project.title}</div>
          <div className="h-screen relative z-10">{project.title}</div>
          <div className="h-screen relative z-10">{project.title}</div>
          <div className="h-screen relative z-10">{project.title}</div>
          <div className="h-screen relative z-10">{project.title}</div>
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
