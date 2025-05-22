import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

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
    <section id='path' className='about'>
      <div className='container-body'>
        {/* about me part-1: */}
        <div className='hidden'>
          <motion.div initial='hidden' whileInView={'visible'}>
            <motion.h2
              custom={0.2}
              variants={textAnimationY}
              className='about-title'
            >
              ADUCATION AND TRAINING <br />
            </motion.h2>

            <motion.div
              custom={0.2}
              variants={textAnimationY}
              className='about-cards'
            >
              <div className='about-card-1'>
                <p className='about-card__description'>
                  WEBBRAIN Academy – Tashkent <br />
                  Albison Academy – Tashkent <br />
                  Completed comprehensive front-end development courses covering
                  HTML, CSS, JavaScript, React, and modern web development
                  practices
                </p>
              </div>

              <div className='about-card-2'>
                <p className='about-card__description opacity'>
                  Worked closely with team members to ensure effective
                  collaboration, while consistently demonstrating a high level
                  of personal accountability.
                </p>
              </div>

              <div className='about-card-3'>
                <p className='about-card__description opacity'>
                  I have been working as a frontend developer for the past 3
                  years, and for the last 2 years, I have also been mentoring
                  students at MARS IT School. Throughout this time, I have
                  gained solid experience by working on various real-world
                  projects, which have strengthened my practical and technical
                  skills. Mentoring others has not only improved my
                  communication and leadership abilities but also deepened my
                  understanding of frontend development concepts.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* aboutMe part-2: */}
        <div className='hidden'>
          <motion.div initial='hidden' whileInView={'visible'}>
            <motion.div
              custom={0.4}
              variants={textAnimationY}
              className='about-cards top'
            >
              <div className='about-card-1'>
                <motion.h2 className='about-title'>
                  SKILLS <br />
                </motion.h2>
                <p className='about-card__description'>
                  HTML, CSS, SASS, JavaScript, TypeScript <br />
                  React.js, Next.js, Styled-components <br />
                  Ant Design (Antd), Material UI, Framer Motion, Shadcn/UI{' '}
                  <br />
                  RESTful API, Axios <br />
                  Redux Toolkit, Context API <br />
                  Git & GitHub
                </p>
              </div>

              <div className='about-card-2'>
                <motion.h2 className='about-title'>
                  SOFT SKILLS <br />
                </motion.h2>
                <p className='about-card__description opacity'>
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

        <div className='hidden'>
          <motion.div initial='hidden' whileInView={'visible'}>
            <motion.div
              custom={0.4}
              variants={textAnimationY}
              className='about-cards top'
            >
              {/* <div className='about-card-1'>
                <motion.h2 className='about-title'>LANGUAGES</motion.h2>
                <p className='about-card__description'>
                  UZBEK: First Languages <br />
                  ENGLISH: Elementary <br />
                  RUSSION: Elementary
                </p>
              </div> */}

              <div className='about-card-2'>
                <motion.h2 className='about-title'>
                  SUMMARY <br />
                </motion.h2>
                <p className='about-card__description opacity'>
                  Specializing in front-end development with comprehensive
                  experience across the full software development lifecycle.
                  Expert in JavaScript and ReactJS, delivering performant and
                  maintainable code. Proven leadership and project management
                  skills, adept at guiding teams and driving projects to
                  successful completion.
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
