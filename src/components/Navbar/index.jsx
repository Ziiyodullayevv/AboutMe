import React, { useState } from "react";
import "./style.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "../Home";
import About from "../About";
import LianerScroll from "../LianerScroll";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color}
    }
`;

const Navbar = () => {
  const [light, setLeght] = useState(false);
  const toggleSwitch = () => setLeght(!light);

  // styled-componets:
  const theme = {
    background: light ? "white" : "#121212",
    color: light ? "black" : "white",
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
            <div className="header__logo">
              <img src="" alt="" />
              <i class="square fa fa-square"></i>

              <div>
                <h4 className="logo-title">Akobir</h4>
                <h5 className="logo-description">Ziyodullayev</h5>
              </div>
            </div>
            <div className="header-btn">
              <div className="switch" data-isOn={light} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
              </div>
            </div>
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
      <Home />
      <About />
      <LianerScroll />
    </ThemeProvider>
  );
};

export default Navbar;
