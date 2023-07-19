import React from "react";
import "./style.css";
import me from "../../assets/image/about-me.jpg";
import { motion } from "framer-motion";

const Me = () => {
  const textAnimationX = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom, duration: 0.1 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      className="parent-card"
    >
      <h4 className="global-title">About Me</h4>
      <motion.div className="me-cards">
        <div className="me-card">
          <motion.p variants={textAnimationX}>
            My name is Akbir. I am a Front-end developer and author of Houzing
            website. I am dedicated to creating websites and interactive
            interfaces. One of my passions is making websites a better user
            experience. I try to create websites that allow me to improve my
            skills and offer. My goal is to make websites a better experience
            for users and make it easier to learn Front-end programming. If you
            want to contact me, you can write to akobirziyod2323@gmail.com by
            e-mail
          </motion.p>
        </div>
        <div className="me-card">
          <div className="card-image">
            <img style={{ width: "400px" }} src={me} alt="me img" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Me;
