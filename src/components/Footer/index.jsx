import React from 'react';
import './style.css';

import {
  BiLogoTelegram,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoGithub,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <div className='container-header'>
      <div className='footer'>
        <div className='footer-card'>
          <div>
            © 2025 Akobir <span className='name'>Ziyodullayev</span>. All rights
            reserved.
          </div>

          <div className='footer-icons'>
            <div className='footer-icon__card'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='icon-anchors'
                href='https://t.me/akobirjs'
              >
                <BiLogoTelegram className='icon-size' />
              </a>
            </div>
            <div className='footer-icon__card'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='icon-anchors'
                href='https://www.linkedin.com/in/akobir-ziyodullayev-373969253'
              >
                <BiLogoLinkedin className='icon-size' />
              </a>
            </div>
            <div className='footer-icon__card'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='icon-anchors'
                href='https://instagram.com/ziiyodullayevv?igshid=ZDc4ODBmNjlmNQ=='
              >
                <BiLogoInstagram className='icon-size' />
              </a>
            </div>
            <div className='footer-icon__card'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='icon-anchors'
                href='https://github.com/ziiyodullayevv'
              >
                <BiLogoGithub className='icon-size' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
