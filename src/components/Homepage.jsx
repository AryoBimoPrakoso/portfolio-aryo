import React from "react";
import profil from "../assets/foto/foto-aryo.jpg";
import { motion } from "framer-motion";
import { useCursor } from "../CustomCursor";

const Homepage = () => {
  // Method 3: Gmail compose with pre-filled data
  const openGmailWithData = (to, subject, body) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };
  const { setCursorVariant } = useCursor();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div
          id="home"
          className="flex flex-col w-full bg-color h-full px-[56px]"
        >
          <div className="flex flex-col md:flex-col lg:flex-row w-full mt-[100px]">
            {/* Content Section */}
            <div className="w-full lg:w-full flex flex-col justify-center order-2 lg:order-1 ">
              <div className="mt-6 lg:mt-12">
                <div
                  className="text-xl lg:text-4xl"
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Hi there! I'm Aryo 👋
                </div>
                <div
                  className="leading-tight text-4xl lg:text-6xl xl:text-8xl text-left my-4"
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  UI/UX Designer &
                  <br />
                  <span className="text-[#bfbfbf]">Aspiring</span> Frontend Dev
                </div>
                <button
                  onClick={() =>
                    openGmailWithData(
                      "prakosoaryobimo@gmail.com",
                      "Project Collaboration",
                      "Hi, I saw your portfolio and would like to discuss a project."
                    )
                  }
                  className="px-4 py-2 bg-[#0F0F0F] text-[#e6e6e6] text-sm lg:text-xl rounded-xl mt-4 cursor-pointer hover:scale-110 transition duration-300"
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Hire me!
                </button>
              </div>
            </div>
            <div className="flex order-1 lg:order-2 w-full lg:w-1/2 justify-center items-center">
              <img
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
                src={profil}
                alt="Foto Profil"
                className="rounded-md w-3/4 lg:w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;

