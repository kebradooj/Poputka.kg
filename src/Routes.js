import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './component/Homepage/HomePage'
import SearchPage from './component/SearchPage/SearchPage'
import OfferPage from './component/OfferPage/OfferPage'

function Routes() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search-page" component={SearchPage} />
      <Route exact path="/offer-page" component ={OfferPage} />
    </>
  );
}

export default Routes;