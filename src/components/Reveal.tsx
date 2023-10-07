// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";

// react
import { FC, ReactNode } from "react";
import { reveal } from "../utils/variants";

interface RevealProps {
  children: ReactNode;
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return (
    <div className="relative">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={transition()}
      >
        {children}
      </motion.div>
      <motion.div
        variants={reveal()}
        initial="hidden"
        transition={{ duration: 0.75, ease: "easeIn" }}
        whileInView="visible"
        viewport={{ once: false }}
        className="absolute inset-0 bg-secondary z-10"
      ></motion.div>
    </div>
  );
};

export default Reveal;
