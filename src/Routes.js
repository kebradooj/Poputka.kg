import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './component/Homepage/HomePage'
import SearchPage from './component/SearchPage/SearchPage'
import OfferPage from './component/OfferPage/OfferPage'
import About from './component/About/About';

function Routes() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search-page" component={SearchPage} />
      <Route exact path="/offer-page" component ={OfferPage} />
      <Route exact path="/about" component={About}/>
    </>
  );
}

export default Routes;