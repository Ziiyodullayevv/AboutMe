import Ticker from "react-ticker";
import "./style.css";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
  BiLogoNetlify,
  BiLogoRedux,
} from "react-icons/bi";

import { motion } from "framer-motion";

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

const Marquee = () => {
  return (
    <div className="top">
      <div className="container-body">
        <motion.div
          style={{ marginBottom: "4rem" }}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="hidden">
            <motion.h2
              custom={0.3}
              variants={textAnimationY}
              className="global-title"
            >
              Skills
            </motion.h2>
          </div>
        </motion.div>
      </div>
      <Ticker
        style={{ marginTop: "4rem" }}
        direction="toLeft"
        speed={12}
        offset="run-in"
      >
        {({ index }) => (
          <div
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="slider">
              <AiFillGithub className="react-icons" />
            </div>
            <div className="slider">
              <AiFillHtml5 className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoCss3 className="react-icons" />
            </div>
            <div className="slider">
              <BsGit className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoJavascript className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoReact className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoSass className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoNetlify className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoRedux className="react-icons" />
            </div>
          </div>
        )}
      </Ticker>
      <Ticker direction="toRight" speed={12} offset="run-in">
        {({ index }) => (
          <div
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="slider">
              <AiFillGithub className="react-icons" />
            </div>
            <div className="slider">
              <AiFillHtml5 className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoCss3 className="react-icons" />
            </div>
            <div className="slider">
              <BsGit className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoJavascript className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoReact className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoSass className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoNetlify className="react-icons" />
            </div>
            <div className="slider">
              <BiLogoRedux className="react-icons" />
            </div>
          </div>
        )}
      </Ticker>
    </div>
  );
};

export default Marquee;
