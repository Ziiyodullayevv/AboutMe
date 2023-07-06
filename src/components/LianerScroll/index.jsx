import React from "react";
import "./style.css";
import { motion, useScroll, useTransform } from "framer-motion";

const LianerScroll = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [100, 600]);

  return (
    <motion.div initial="hidden" whileInView={"visible"}>
      <div className="container-100"></div>
    </motion.div>
  );
};

export default LianerScroll;
