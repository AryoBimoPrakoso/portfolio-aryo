import React, { useEffect, useRef, useState } from "react";
import Video from "../assets/video/0822.mp4";

const ProjectFE = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if(window.scrollY >= 100) {
        setVideo(true)
      } else {
        setVideo(false)
      }
    }

    window.addEventListener("scroll", handleShow);

    return () => window.removeEventListener("scroll", handleShow)
  }, [])

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
      <div className="flex flex-col w-full text-center">
        <div className="flex justify-center">
          <video ref={ref} onClick={handlePlay} controls className={`transition-all ease-in duration-300 ${video ? "w-3/4 rounded-xl" : "w-screen"}`}>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="h-screen">
          test
        </div>
      </div>
    </div>
  );
};
export default ProjectFE;
