import React, { Component } from 'react';

import Header from '../Header/Header'
import Registration from '../Registration/Registration'
import Footer from '../Footer/Footer'

class OfferPage extends Component {
  render() {
    return (
      <div className="offer-page">
        <Header/>
        <Registration />
        <Footer />
      </div>
    );
    
  }
}

export default OfferPage;