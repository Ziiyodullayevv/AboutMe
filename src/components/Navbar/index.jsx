import React, { useRef, useState } from "react";
import "./style.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "../Home";
import About from "../About";
import Modal from "../Modal";
import MyWorkLeft from "../MyWorkLeft";
const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color}
    }
`;

const Navbar = () => {
  const modalRef = useRef();

  // dark-light mode:
  const [light, setLeght] = useState(false);
  const toggleSwitch = () => setLeght(!light);

  // styled-componets:
  const theme = {
    background: light ? "black" : "white",
    color: light ? "white" : "black",
  };

  // framer motion:

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // progress-bar:
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* navbar section  */}
      <div className="wrapper">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          className="container-header"
        >
          <div className="header">
            {/* logo: */}
            <div className="header__logo">
              <img src="" alt="" />
              <i className="square fa fa-square"></i>
              <div>
                <h4 className="logo-title">Akobir</h4>
                <h5 className="logo-description">Ziyodullayev</h5>
              </div>
            </div>

            {/* button: */}
            <div className="header-btn">
              <div className="switch" data-ison={light} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
              </div>
            </div>

            {/* navbar: */}
            <div className="header-navigation">
              <div className="bars-wrapper">
                <div className="lianer active"></div>
                <div className="lianer"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* home section  */}
      <Home ref={modalRef} />
      <About />
      <Modal ref={modalRef}>Hello world</Modal>
      <MyWorkLeft />
    </ThemeProvider>
  );
};

export default Navbar;
