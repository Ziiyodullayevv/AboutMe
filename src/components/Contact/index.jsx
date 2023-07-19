import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const Contact = () => {
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

  return (
    <section id="contact" className="contact">
      <div className="container-body">
        <motion.div initial="hidden" whileInView={"visible"}>
          <div className="hidden">
            <motion.h2
              custom={0.3}
              variants={textAnimationY}
              className="global-title"
            >
              contact
            </motion.h2>
          </div>
        </motion.div>

        <div className="contact-card">
          <form action="">
            <div className="contact-card__user">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
              </div>

              <div>
                <label htmlFor="n">Telefon</label>
                <input id="n" type="tel" />
              </div>

              <div>
                <label htmlFor="na">Gmail</label>
                <input id="na" type="email" />
              </div>
            </div>
            <div className="message">
              <label htmlFor="nam">Mesage</label>
              <input id="nam" type="email" />
            </div>

            <button className="btn-universal">
              submit<span className="gold-shadow"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
