import React, { forwardRef } from "react";
import "./style.css";
import about from "../../assets/image/showreel.png";
import { motion } from "framer-motion";

const Home = forwardRef((props, ref) => {
  console.log(props, ref);
  const textAnimationY = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom, duration: 0.5 },
    }),
  };

  const textAnimationS = {
    hidden: {
      y: 0,
      opacity: 0,
      scale: 0.4,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: custom, duration: 0.5 },
    }),
  };
  return (
    <div className="container-body">
      <motion.section initial="hidden" whileInView={"visible"} className="home">
        <div className="hidden">
          <motion.div
            custom={0.5}
            variants={textAnimationY}
            className="home-title"
          >
            Hi there!
          </motion.div>
        </div>
        <div className="home-cards">
          <div className="home-card-left">
            <motion.div
              onClick={() => ref.current.open()}
              custom={0.6}
              variants={textAnimationS}
            >
              <div className="home-card-left__box">
                <img src={about} alt="aboutMe" />
                <h4>
                  <i className="fa fa-play"></i> About Me
                </h4>
              </div>
            </motion.div>
          </div>
          <div className="home-card-right">
            <div className="hidden">
              <motion.h4
                custom={0.6}
                variants={textAnimationY}
                className="home-card-right__title"
              >
                Biz haqimizda faktlar
              </motion.h4>
            </div>
            <div className="hidden">
              <div className="hidden">
                <motion.h3 custom={0.7} variants={textAnimationY}>
                  My name is
                </motion.h3>
              </div>
              <div className="hidden">
                <motion.h3 custom={0.8} variants={textAnimationY}>
                  Akobir
                </motion.h3>
              </div>
              <div className="hidden">
                <motion.h3 custom={0.9} variants={textAnimationY}>
                  Ziyodullayev
                </motion.h3>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
});

export default Home;
