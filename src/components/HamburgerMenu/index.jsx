import React, { forwardRef } from "react";
import "./style.css";

const Me = forwardRef((props, ref) => {
  return (
    <div>
      <div className="me-cards">
        {/* card left  */}
        <div className="me-card">
          <ul>
            <li>
              <a
                className="anchor"
                onClick={() => ref.current.close()}
                href="#about"
              >
                about me
              </a>
            </li>
            <li>
              <a
                className="anchor"
                onClick={() => ref.current.close()}
                href="#path"
              >
                path
              </a>
            </li>
            <li>
              <a
                className="anchor"
                onClick={() => ref.current.close()}
                href="#my-work"
              >
                my works
              </a>
            </li>
            <li>
              <a
                className="anchor"
                onClick={() => ref.current.close()}
                href="#contact"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
        {/* card right */}
        <div className="me-card">
          <div className="me-card__mini-card">
            <h4>Email</h4>
            <div className="mini-card">
              <h5>
                <a
                  href="mailto:akobirziyod2323@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  akobirziyod2323@gmail.com
                </a>
              </h5>
            </div>
          </div>

          <div className="me-card__mini-card">
            <h4>Social Networks</h4>
            <div className="mini-card">
              <h5>
                <a
                  href="https://t.me/ziiyodullayevv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  telegram
                </a>
              </h5>
              <h5>
                <a
                  href="https://instagram.com/ziiyodullayevv?igshid=ZDc4ODBmNjlmNQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </h5>
              <h5>
                <a
                  href="https://github.com/ziiyodullayevv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </h5>
            </div>
          </div>

          <div className="me-card__mini-card">
            <h4>Telefon</h4>
            <div className="mini-card">
              <h5>
                <a href="tel:+998995476202">+99899 547 62 02</a>
              </h5>
            </div>
          </div>

          <div className="me-card__mini-card">
            <h4>Address</h4>
            <div className="mini-card">
              <h5>
                <a
                  href="https://www.google.com/maps/place/Chilanzar+District+Police+Office/@41.2882296,69.1960886,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8a2c343d6255:0x74f4af99e2a76c73!8m2!3d41.2882297!4d69.2009595!16s%2Fg%2F1w0qz8t9?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uzbekistan, Tashkent, Uchtepa
                </a>
              </h5>
            </div>
          </div>

          <div className="me-card__mini-card">
            <h4>Aducation</h4>
            <div className="mini-card">
              <h5>
                <a
                  href="https://www.google.com/maps/place/Webbrain+Academy/@41.3273354,69.2453894,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b50922256f9:0xd4691d23b9d26b5c!8m2!3d41.3273354!4d69.2479643!16s%2Fg%2F11rt_x6g5x?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Webbrain Academy
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Me;
