import React from "react";
import { motion } from "framer-motion";
import DetailRun from "../assets/foto/runtracker.png";
const runTracker = ({ setIndex }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mt-[140px] p-4 h-full">
          <div className="flex flex-col-reverse lg:flex-col justify justify-center w-full">
            <div className="flex flex-col md:flex-col lg:flex-row p-6 w-full justify-around">
              <h1 className="text-3xl font-bold underline underline-offset-8">
                Run Tracker
              </h1>
              <p
                className="leading-relaxed mt-8 w-full lg:w-1/3 text-[20px] lg:text-[24px]"
                onMouseEnter={() =>
                  window.dispatchEvent(new Event("cursor-text-enter"))
                }
                onMouseLeave={() =>
                  window.dispatchEvent(new Event("cursor-text-leave"))
                }
              >
                The design of this run tracking app features a modern and
                informative visual approach, showing the flow of use from the
                welcome page that motivates users to pursue their health goals,
                to detailed views of daily activities such as number of steps,
                duration, distance traveled, and estimated calories burned.
                Visual elements such as runner illustrations, route maps, and
                daily achievement statistics are designed to provide an
                intuitive and inspiring experience through a clean, structured,
                and easy-to-navigate interface, making this design ideal for
                apps focused on fitness and an active lifestyle.
              </p>
            </div>

            <img
              src={DetailRun}
              alt="Detail Wallet"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default runTracker;
