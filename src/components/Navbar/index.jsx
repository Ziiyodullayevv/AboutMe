import React, { useRef, useState } from "react";
import "./style.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from "../Home";
import About from "../About";
import Modal from "../Modal";
import MyWorkLeft from "../MyWork";
import Contact from "../Contact";
import Footer from "../Footer";
import Me from "../Me";
import Hamburger from "../Hamburger";
import HamburgerMenu from "../HamburgerMenu";
import Marquee from "../Morquee";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    };

    .contact-card {
      background-color: ${(props) =>
        props.theme.background === "white" ? "black" : "white"};
        color: ${(props) =>
          props.theme.color === "white" ? "black" : "white"};
    }

    .btn-universal {
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.color}
    }

    .slider {
      background-color: ${(props) =>
        props.theme.background === "white"
          ? "rgba(0, 0, 0, 0.07)"
          : "rgba(255, 255, 255, 0.07)"};
        color: ${(props) =>
          props.theme.color === "white" ? "black" : "white"};
    }

    .react-icons {
        color: ${(props) =>
          props.theme.color === "white"
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(0, 0, 0, 0.7)"};
    }

    .anchor {
      transition: all 300ms ease;
      color: ${(props) => (props.theme.color === "white" ? "white" : "black")};
    }

    & .anchor:hover {
      transition: all 300ms ease-in-out;
      -webkit-text-fill-color: ${(props) =>
        props.theme.color === "white" ? "white" : "black"};
    }

    & .anchor:active {
      transition: all 300ms ease-in-out;
      -webkit-text-fill-color: ${(props) =>
        props.theme.color === "white" ? "white" : "black"};
    }

    .footer-icon__card a {
      color: ${(props) => (props.theme.color === "white" ? "white" : "black")}
    }

    .mini-card h5 a {
      color: ${(props) => (props.theme.color === "white" ? "white" : "black")}
    }
`;

const Navbar = () => {
  const modalRef = useRef();
  const hamburgerRef = useRef();

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
              <img
                style={{ width: 150 }}
                src={require("../../assets/icons/logo-png.png")}
                alt=""
              />
              <div></div>
            </div>

            {/* button: */}
            <div className="header-btn">
              <div className="switch" data-ison={light} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
              </div>
            </div>

            {/* navbar: */}
            <div
              onClick={() => hamburgerRef.current.open()}
              className="header-navigation"
            >
              <div className="bars-wrapper">
                <div className="lianer active"></div>
                <div className="lianer"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* home section  */}
      <Hamburger ref={hamburgerRef}>
        <HamburgerMenu ref={hamburgerRef} />
      </Hamburger>
      <Home ref={modalRef} />
      <About />
      <Modal ref={modalRef}>
        <Me />
      </Modal>
      <MyWorkLeft />
      <Marquee />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default Navbar;
