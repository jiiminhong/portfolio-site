import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const PageScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-1 bg-[#1A8754] origin-top-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default PageScrollProgress;
