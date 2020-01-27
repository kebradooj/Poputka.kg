import React, { Component } from 'react';

import Header from '../Header/Header'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'

class SearchPage extends Component {
  state = {
  }

  render() {
    return (
      <div className="search-page">
        <Header/>
        <Search
          onChange={this.handleFindTrips}
        />
        <Footer />
      </div>
    );
    
  }
}

export default SearchPage;