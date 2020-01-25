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
      <div className="home">
        <Header/>

          <Link to="/search-page">
            Найти поездку
          </Link>
          <Link to="/offer-page">
            Предложить поездку
          </Link>

        <Footer />
      </div>
    );
    
  }
}

export default HomePage;