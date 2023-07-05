import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section className="about">
      <div className="container-body">
        <motion.h2 className="about-title">
          BIZ BILAN ISHLASHDAN FAXRLANAMIZ. <br />
          ULAR BIZ BILAN ISHLASH UCHUN PUL TEJASHADI.
        </motion.h2>

        <motion.div className="about-cards">
          <div className="about-card-1">
            <p className="about-card__description">
              ALEX Group - bu o'z sohalarida <br />
              etakchi bo'lgan kompaniyalar guruhi .
            </p>
          </div>

          <div className="about-card-2">
            <p className="about-card__description">
              Biz biznesning barcha sohalarida loyihalarni <br />
              amalga oshirishda muvaffaqiyatli tajribaga egamiz .
            </p>
          </div>

          <div className="about-card-3">
            <p className="about-card__description">
              IT haqida bilgan hamma narsa va nafaqat - mobil <br />
              ilovalar, biznesni avtomatlashtirish, <br />
              veb-saytlarni sotish, ijtimoiy tarmoqlarda reklama <br />
              (smm), qidiruv tizimlarida reklama (seo), <br />
              brend-buklar, autsorsing, autstaffing, server <br />
              uskunalari.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
