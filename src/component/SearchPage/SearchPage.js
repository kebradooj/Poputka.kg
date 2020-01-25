import React, { Component } from 'react';

import Header from '../Header/Header'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'

class SearchPage extends Component {
  render() {
    return (
      <div className="search-page">
        <Header/>
        <Search />
        <Footer />
      </div>
    );
    
  }
}

export default SearchPage;