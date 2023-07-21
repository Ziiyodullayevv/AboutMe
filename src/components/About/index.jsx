import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const About = () => {
  const textAnimationY = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom, duration: 0.6 },
    }),
  };
  return (
    <section id="path" className="about">
      <div className="container-body">
        {/* about me part-1: */}
        <div className="hidden">
          <motion.div initial="hidden" whileInView={"visible"}>
            <motion.h2
              custom={0.2}
              variants={textAnimationY}
              className="about-title"
            >
              ADUCATION AND TRAINING <br />
            </motion.h2>

            <motion.div
              custom={0.2}
              variants={textAnimationY}
              className="about-cards"
            >
              <div className="about-card-1">
                <p className="about-card__description">
                  WEBBRAIN ACADEMY - Tashkent
                  <br />
                  Front-end development course
                </p>
              </div>

              <div className="about-card-2">
                <p className="about-card__description opacity">
                  Collaborated effectively with team members
                  <br />
                  while maintaining strong sense of inividual responsibility.
                </p>
              </div>

              <div className="about-card-3">
                <p className="about-card__description opacity">
                  I got good experience and knowledge as a frontend developer in
                  training center and worked on many real projects. During the
                  in-depth lessons, I got very important information. It was
                  very useful for me to participate in a real project during a
                  1.5-month internship
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* aboutMe part-2: */}
        <div className="hidden">
          <motion.div initial="hidden" whileInView={"visible"}>
            <motion.div
              custom={0.4}
              variants={textAnimationY}
              className="about-cards top"
            >
              <div className="about-card-1">
                <motion.h2 className="about-title">
                  SKILLS <br />
                </motion.h2>
                <p className="about-card__description">
                  HTML, CSS, SASS, javaScript Expert <br />
                  ReactJS, Hooks, Styled-components <br />
                  Redux-toolkit, antd, materialUI, framer motion <br />
                  Restfull API, Fetch, Axios <br />
                  Git
                </p>
              </div>

              <div className="about-card-2">
                <motion.h2 className="about-title">
                  SOFT SKILLS <br />
                </motion.h2>
                <p className="about-card__description opacity">
                  Project Managament <br />
                  Distributed Technologies
                  <br />
                  Agile Development Methodologies
                  <br />
                  Problem-Solving
                  <br />
                  Communication <br />
                  Code Reviews <br />
                  Responsibility
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* aboutMe part-3:  */}

        <div className="hidden">
          <motion.div initial="hidden" whileInView={"visible"}>
            <motion.div
              custom={0.4}
              variants={textAnimationY}
              className="about-cards top"
            >
              <div className="about-card-1">
                <motion.h2 className="about-title">LANGUAGES</motion.h2>
                <p className="about-card__description">
                  UZBEK: First Languages <br />
                  ENGLISH: Elementary <br />
                  RUSSION: Elementary
                </p>
              </div>

              <div className="about-card-2">
                <motion.h2 className="about-title">
                  SUMMARY <br />
                </motion.h2>
                <p className="about-card__description opacity">
                  Junior Plus Web Developer specializing in front-end
                  development. Experienced with all stages of development cycle
                  for dynamic web projects. Well-versed in javaScript and
                  ReactJS. Strong background in management and leadership
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
