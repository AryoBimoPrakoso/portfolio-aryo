import React from "react";
import { motion } from "framer-motion";
import WebKopi from "../assets/foto/websiteKopi.png";

const Kopi = () => {
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
                Web Profile Company
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
                The design of the <span className="font-bold">Sikopi</span>{" "}
                website presents a strong and visually appealing brand identity,
                conveying that coffee is not just a drink—it is an experience.
                With warm tones and a neat layout, this page highlights the
                company's mission to provide high-quality coffee that is crafted
                with dedication. Key elements such as an inspirational slogan,
                photos of the coffee-making process, and an explanation of the
                company's vision harmoniously blend with interactive cafe
                location options, creating a professional yet customer-friendly
                impression. This makes Sikopi's design effective as the digital
                face of a brand that prioritizes quality, storytelling, and
                comfort in every serving.
              </p>
            </div>

            <img
              src={WebKopi}
              alt="Detail Wallet"
              className="m-auto rounded-xl w-8xl "
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Kopi;
