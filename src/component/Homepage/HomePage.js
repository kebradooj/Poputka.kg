import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Home.css'

class HomePage extends Component {
  state = {
    page: 'home'
  }

  render() {
    return (
      <>
        <Header/>
          <div className='container'>
            <div className='homepage-flex'>
              <p className='h3-homepage homepage-bold'>Выгодные поездки по Кыргызстану</p>
              <div className='homepage-content'>
                <div className='homepage-block'>
                  <div className='homepage-block-flex'>
                    <div className='homepage-block-img1'></div>
                    <div className='homepage-block-content'>
                      <p className='homepage-bold homepage-p-size'>Пассажирам</p>
                      <p>Планируйте поездки с Poputka.KG, и ваши путешествия станут удобнее и экономичнее!</p>
                      <Link className='homepage-link' to="/search-page">
                        Найти поездку
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='homepage-block'>
                  <div className='homepage-block-flex'>
                    <div className='homepage-block-img2'></div>
                    <div className='homepage-block-content'>
                      <p className='homepage-bold homepage-p-size'>Водителям</p>
                      <p>Найдите попутчиков по своему маршруту, чтобы не совершать поездки в полупустом авто!</p>
                      <Link className='homepage-link' to="/offer-page">
                        Предложить поездку
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link className='homepage-ads'to='#'>
                <div className='homepage-ads-bg'></div>
              </Link>
            </div>
          </div>
        <Footer />
      </>
    );
    
  }
}

export default HomePage;