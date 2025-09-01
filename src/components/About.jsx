import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useCursor } from "../CustomCursor";
import dribbleSVG from "../assets/svg/dribble.svg";
import githubSVG from "../assets/svg/github.svg";
import instagramSVG from "../assets/svg/instagram.svg";
import linkedinSVG from "../assets/svg/linkedin.svg";
import { Link } from "react-router-dom";
import AnimatedComponent from "./AnimatedComponent";

const About = () => {
  const { setCursorVariant } = useCursor();
  return (
    <>
      <AnimatedComponent>
        <div
          id="about"
          className="w-full flex flex-col px-[56px] gap-[20px] lg:gap-[40px]"
        >
          <div>
            <AnimatedComponent delay={0.2}>
              <h2
                className="text-[24px] lg:text-[64px] w-max "
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                About
              </h2>
            </AnimatedComponent>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
            {/* Untuk desktop */}

            <div className="hidden lg:flex flex-col  gap-2 lg:gap-4 flex-1 lg:text-[32px]">
              <AnimatedComponent delay={0.4}>
                <a
                  href="https://www.linkedin.com/in/aryo-bimo-prakoso-746001347/"
                  target="_blank"
                  className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300 "
                >
                  Linkedin
                  <span>
                    <GoArrowUpRight />
                  </span>
                </a>
              </AnimatedComponent>
              <AnimatedComponent delay={0.6}>
                <a
                  href="https://github.com/AryoBimoPrakoso"
                  target="_blank"
                  className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300 "
                >
                  Github
                  <span>
                    <GoArrowUpRight />
                  </span>
                </a>
              </AnimatedComponent>
              <AnimatedComponent delay={0.8}>
                <a
                  href="https://www.instagram.com/aryoobp/"
                  target="_blank"
                  className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300"
                >
                  Instagram
                  <span>
                    <GoArrowUpRight />
                  </span>
                </a>
              </AnimatedComponent>
              <AnimatedComponent delay={1}>
                <a
                  href="https://dribbble.com/aryobimop"
                  target="_blank"
                  className="border-b-1 flex flex-row justify-between hover:bg-[#0F0F0F] hover:text-[#F6F6F6] transition duration-300"
                >
                  Dribble
                  <span>
                    <GoArrowUpRight />
                  </span>
                </a>
              </AnimatedComponent>
            </div>
            <AnimatedComponent
              delay={0.4}
              className="lg:w-1/2 flex-1 lg:text-[32px]"
            >
              <p
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Hi there! I'm Aryo Bimo Prakoso a passionate and driven
                Informatics student with a keen interest in UI/UX design and
                front-end development. I enjoy creating user-friendly and
                aesthetically pleasing digital experiences, always striving to
                bridge the gap between design and functionality. I'm constantly
                learning and expanding my skill set to build impactful and
                accessible web interfaces.
              </p>
            </AnimatedComponent>

            {/* Untuk Mobile */}
            <div className="flex lg:hidden flex-row gap-2 w-full ">
              <a
                href="https://www.linkedin.com/in/aryo-bimo-prakoso-746001347"
                target="_blank"
              >
                <img className="w-6" src={linkedinSVG} alt="Linkedin Aryo" />
              </a>
              <a href="https://dribbble.com/aryobimop" target="_blank">
                <img className="w-6" src={dribbleSVG} alt="Linkedin Aryo" />
              </a>
              <a href="https://github.com/AryoBimoPrakoso" target="_blank">
                <img className="w-6" src={githubSVG} alt="Linkedin Aryo" />
              </a>
              <a href="https://www.instagram.com/aryoobp/" target="_blank">
                <img className="w-6" src={instagramSVG} alt="Linkedin Aryo" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </>
  );
};

export default About;
