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

  // CV download:

  const PDF_FILE_URL = "https://ziyodullayev.netlify.app/webbrain.pdf";

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      className="parent-card"
    >
      <h4 className="global-title padd">About Me</h4>
      <motion.div className="read-more">
        <div className="read-more-card">
          <motion.p variants={textAnimationX}>
            My name is Akobir. I am a Front-end developer and author of Houzing
            website. I am dedicated to creating websites and interactive
            interfaces. One of my passions is making websites a better user
            experience. I try to create websites that allow me to improve my
            skills and offer. My goal is to make websites a better experience
            for users and make it easier to learn Front-end programming.
          </motion.p>
          <button
            onClick={() => downloadFileAtURL(PDF_FILE_URL)}
            className="btn-universal p"
          >
            <span className="gold-shadow"></span>
            download
          </button>
        </div>
        <div className="me-card">
          <div className="card-image">
            <img className="me-image" src={me} alt="me img" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Me;
