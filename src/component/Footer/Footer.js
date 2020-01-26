import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <div className='main-footer'>
          <div className='container'>
          <div className='footer-left'>
            <div className='footer-logo'></div>
            <div className='footer-nav'>
              <Link className='footer-link' to=''>Правила</Link>
              <Link className='footer-link' to='/about'>Как это работает</Link>
              <Link className='footer-link' to=''>О нас</Link>
            </div>
          </div>
          <div className='footer-right'>
            <div className='social-footer'>
              <Link className='instagram-block' to='#'>
                <div className='instagram-img'></div>
              </Link>
              <Link className='facebook-block' to='#'>
                <div className='facebook-img'></div>
              </Link>
              <p className='footer-p'>© 2020, Poputka.KG</p>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Footer;