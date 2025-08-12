// src/components/CustomCursor.jsx
import { useState, useEffect, createContext, useContext } from "react";
import { motion } from "framer-motion";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <CursorContext.Provider value={{ setCursorVariant }}>
      {children}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 250, // lebih rendah kalau mau lebih lambat
          damping: 18, // lebih tinggi kalau mau tanpa pantulan
          mass: 0.4,
        }}
      />
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
