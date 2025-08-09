// src/components/CustomCursor.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 

export default function CustomCursor() {
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

  // Event handler bisa di-trigger dari luar lewat custom event
  useEffect(() => {
    const enter = () => setCursorVariant("text");
    const leave = () => setCursorVariant("default");

    window.addEventListener("cursor-text-enter", enter);
    window.addEventListener("cursor-text-leave", leave);

    return () => {
      window.removeEventListener("cursor-text-enter", enter);
      window.removeEventListener("cursor-text-leave", leave);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
