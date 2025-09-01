import React, { useEffect, useState } from "react";
import { dataDesignUI } from "../data/data";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useCursor } from "../CustomCursor";


const DesignDetail = () => {
  const [design, setDesign] = useState(null);
  const { id, title } = useParams();
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const designDetail = dataDesignUI.find((p) => p.id === parseInt(id));
    setDesign(designDetail);
  }, [id, title]);

  return (
    <>
      {design ? (
        <div className="mt-[100px]">
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
                {design.title}
              </h1>
              <p
                className="leading-relaxed mt-8 w-full lg:w-1/3 text-[20px] lg:text-[24px]"
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {design.description}
              </p>
            </div>

            <img
              src={design.img}
              alt="Detail Wallet"
              className="rounded-xl w-full"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            />
          </div>
        </div>
      </motion.div>
        </div>
      ) : (
        <div>
          <h1>Design not found</h1>
        </div>
      )}
    </>
  );
};

export default DesignDetail;
