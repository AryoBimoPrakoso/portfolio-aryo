// src/components/AnimatedComponent.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";


const AnimatedComponent = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya sekali saat masuk viewport

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Status awal: transparan dan geser ke bawah 50px
    visible: { opacity: 1, y: 0 }, // Status akhir: tampak penuh dan posisi normal
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }} // Durasi animasi dan delay
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;