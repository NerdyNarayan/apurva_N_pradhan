import React from "react";
import { motion, type Variants } from "framer-motion";

interface GlitteryTextProps {
  text: string;
}

const GlitteryText: React.FC<GlitteryTextProps> = ({ text }) => {
  // Variants for the glittery effect
  const glitterVariants: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.div
      className="relative inline-block bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-4xl font-bold text-transparent"
      variants={glitterVariants}
      initial="initial"
      animate="animate"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            filter: `hue-rotate(${index * 10}deg)`,
          }}
          variants={glitterVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default GlitteryText;
