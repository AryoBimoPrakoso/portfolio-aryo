import React from "react";
import { motion } from "framer-motion";
import MyAgroDetail from "../assets/foto/my-agro.png";

const MyAgro = () => {
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
                Asisstant App
              </h1>
              <p
                className="leading-relaxed mt-8 w-full lg:w-1/3 text-[24px]"
                onMouseEnter={() =>
                  window.dispatchEvent(new Event("cursor-text-enter"))
                }
                onMouseLeave={() =>
                  window.dispatchEvent(new Event("cursor-text-leave"))
                }
              >
                The design of the <span className="font-bold">myAgro</span> app
                is the result of a collaboration between our team of three, with
                the aim of integrating technology and easy access to information
                to support smart and modern agricultural activities. On the home
                screen, we display illustrations of farmers and drones to create
                an innovative impression from the moment the app is first used.
                Important information such as current weather conditions, crop
                growth status, and harvest time estimates is presented visually
                and interactively to help farmers make data-driven decisions. We
                have also designed a feature for determining new land locations
                supported by maps and direct location selection, strengthening
                the app's role as a strategic tool in digital agricultural
                management. All design elements are developed with principles of
                intuitive, user-friendly, and efficient interfaces to truly
                support farmers' productivity.
              </p>
            </div>

            <img
              src={MyAgroDetail}
              alt="Detail Wallet"
              className="m-auto rounded-xl w-8xl "
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyAgro;
