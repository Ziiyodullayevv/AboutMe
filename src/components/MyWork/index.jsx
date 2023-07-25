import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/image/showreel.png";
import fitClub from "../../assets/image/FIT_CLUB.png";
import heart from "../../assets/image/heart.png";
import turkish from "../../assets/image/turkish-original.png";

const MyWorkLeft = () => {
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
      transition: { delay: custom, duration: 0.3 },
    }),
  };
  return (
    <section id="my-work" className="my-work">
      <div className="container-body">
        <motion.div initial="hidden" whileInView={"visible"}>
          <div className="hidden">
            <motion.h2
              custom={0.3}
              variants={textAnimationY}
              className="global-title"
            >
              My Works
            </motion.h2>
          </div>
        </motion.div>
        {/* start */}
        <div className="my-work-cards">
          <div className="my-work-card">
            <motion.div initial={"hidden"} whileInView={"visible"}>
              <a href="https://google.com">
                <motion.div variants={textAnimationS} className="card-image">
                  <img className="img" src={image} alt="works" />
                </motion.div>
              </a>
            </motion.div>
            <div className="card-description">
              <motion.div initial={"hidden"} whileInView={"visible"}>
                <div className="hidden">
                  <motion.h3 custom={0.4} variants={textAnimationY}>
                    Houzing Project
                  </motion.h3>
                </div>
                <div className="hidden">
                  <motion.p
                    className="hidden"
                    custom={0.5}
                    variants={textAnimationY}
                  >
                    home sale
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* end */}
        <div className="my-work-cards right">
          <div className="my-work-card right">
            <motion.div initial={"hidden"} whileInView={"visible"}>
              <a href="https://google.com">
                <motion.div variants={textAnimationS} className="card-image">
                  <img className="img" src={fitClub} alt="works" />
                </motion.div>
              </a>
            </motion.div>
            <div className="card-description">
              <motion.div initial={"hidden"} whileInView={"visible"}>
                <div className="hidden">
                  <motion.h3 custom={0.4} variants={textAnimationY}>
                    Fit-Club Project
                  </motion.h3>
                </div>
                <div className="hidden">
                  <motion.p
                    className="hidden"
                    custom={0.5}
                    variants={textAnimationY}
                  >
                    sports related
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* start */}
        <div className="my-work-cards">
          <div className="my-work-card">
            <motion.div initial={"hidden"} whileInView={"visible"}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ziiyodullayevv.github.io/Heart"
              >
                <motion.div variants={textAnimationS} className="card-image">
                  <img className="img" src={heart} alt="works" />
                </motion.div>
              </a>
            </motion.div>
            <div className="card-description">
              <motion.div initial={"hidden"} whileInView={"visible"}>
                <div className="hidden">
                  <motion.h3 custom={0.4} variants={textAnimationY}>
                    Gainioz Project
                  </motion.h3>
                </div>
                <div className="hidden">
                  <motion.p
                    className="hidden"
                    custom={0.5}
                    variants={textAnimationY}
                  >
                    support
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* end: */}
        <div className="my-work-cards right">
          <div className="my-work-card right">
            <motion.div initial={"hidden"} whileInView={"visible"}>
              <a href="https://google.com">
                <motion.div variants={textAnimationS} className="card-image">
                  <img className="img" src={turkish} alt="works" />
                </motion.div>
              </a>
            </motion.div>
            <div className="card-description">
              <motion.div initial={"hidden"} whileInView={"visible"}>
                <div className="hidden">
                  <motion.h3 custom={0.4} variants={textAnimationY}>
                    Texna Project
                  </motion.h3>
                </div>
                <div className="hidden">
                  <motion.p
                    className="hidden"
                    custom={0.5}
                    variants={textAnimationY}
                  >
                    technologies
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkLeft;
