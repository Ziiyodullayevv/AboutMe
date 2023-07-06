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
    <section className="about">
      <div className="container-body">
        {/* about me part-1: */}
        <motion.div initial="hidden" whileInView={"visible"}>
          <motion.h2
            custom={0.2}
            variants={textAnimationY}
            className="about-title"
          >
            BIZ BILAN ISHLASHDAN FAXRLANAMIZ. <br />
            ULAR BIZ BILAN ISHLASH UCHUN PUL TEJASHADI.
          </motion.h2>

          <motion.div
            custom={0.2}
            variants={textAnimationY}
            className="about-cards"
          >
            <div className="about-card-1">
              <p className="about-card__description">
                ALEX Group - bu o'z sohalarida <br />
                etakchi bo'lgan kompaniyalar guruhi .
              </p>
            </div>

            <div className="about-card-2">
              <p className="about-card__description opacity">
                Biz biznesning barcha sohalarida loyihalarni <br />
                amalga oshirishda muvaffaqiyatli tajribaga egamiz .
              </p>
            </div>

            <div className="about-card-3">
              <p className="about-card__description opacity">
                IT haqida bilgan hamma narsa va nafaqat - mobil <br />
                ilovalar, biznesni avtomatlashtirish, <br />
                veb-saytlarni sotish, ijtimoiy tarmoqlarda reklama <br />
                (smm), qidiruv tizimlarida reklama (seo), <br />
                brend-buklar, autsorsing, autstaffing, server <br />
                uskunalari.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* aboutMe part-2: */}
        <motion.div initial="hidden" whileInView={"visible"}>
          <motion.div
            custom={0.4}
            variants={textAnimationY}
            className="about-cards top"
          >
            <div className="about-card-1">
              <motion.h2 className="about-title">
                BIZ BILAN ISHLASHDAN FAXRLANAMIZ. <br />
                ULAR BIZ BILAN ISHLASH UCHUN PUL TEJASHADI.
              </motion.h2>
              <p className="about-card__description">
                ALEX Group - bu o'z sohalarida <br />
                etakchi bo'lgan kompaniyalar guruhi .
              </p>
            </div>

            <div className="about-card-2">
              <motion.h2 className="about-title">
                BIZ BILAN ISHLASHDAN FAXRLANAMIZ. <br />
                ULAR BIZ BILAN ISHLASH UCHUN PUL TEJASHADI.
              </motion.h2>
              <p className="about-card__description opacity">
                IT haqida bilgan hamma narsa va nafaqat - mobil <br />
                ilovalar, biznesni avtomatlashtirish, <br />
                veb-saytlarni sotish, ijtimoiy tarmoqlarda reklama <br />
                (smm), qidiruv tizimlarida reklama (seo), <br />
                brend-buklar, autsorsing, autstaffing, server <br />
                uskunalari.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* aboutMe part-3:  */}

        <motion.div initial="hidden" whileInView={"visible"}>
          <motion.div
            custom={0.4}
            variants={textAnimationY}
            className="about-cards top"
          >
            <div className="about-card-1">
              <motion.h2 className="about-title">
                BIZ BILAN ISHLASHDAN FAXRLANAMIZ. <br />
                ULAR BIZ BILAN ISHLASH UCHUN PUL TEJASHADI.
              </motion.h2>
              <p className="about-card__description">
                ALEX Group - bu o'z sohalarida <br />
                etakchi bo'lgan kompaniyalar guruhi .
              </p>
            </div>

            <div className="about-card-2">
              <motion.h2 className="about-title">
                BIZ BILAN ISHLASHDAN FAXRLANAMIZ. <br />
                ULAR BIZ BILAN ISHLASH UCHUN PUL TEJASHADI.
              </motion.h2>
              <p className="about-card__description opacity">
                IT haqida bilgan hamma narsa va nafaqat - mobil <br />
                ilovalar, biznesni avtomatlashtirish, <br />
                veb-saytlarni sotish, ijtimoiy tarmoqlarda reklama <br />
                (smm), qidiruv tizimlarida reklama (seo), <br />
                brend-buklar, autsorsing, autstaffing, server <br />
                uskunalari.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
