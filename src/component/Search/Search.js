import React, { Component } from 'react';

import './Search.css'

class Search extends Component {
  render() {
    return (
      <div id='container'>

        <div className='visit-search'>
          <div className='visits'>
            <div className='visit-left'>
              <input className='visit-inp1' type='text' placeholder='From' />
            </div>
            <div className='visit-midpoint'></div>
            <div className='visit-right'>
              <input className='visit-inp2' type='text' placeholder='To' />
            </div>
            <button className='btn'>Find trips</button>
          </div>
        </div>

        <div className='ads'>
          <div className='ads-logoCar'></div>
          <div className='ads-toGo'>
            <div className='toGo-text1'><b>january 27 </b>
              <span className='toGo-hourIcon'></span>
              <span> 00:00 </span>
              <p className='toGo-text2'> Osh s.<span className='toGo-arrowIcon'></span> Bishkek </p>
            </div>
          </div>
          <div className='toGo-seats'>
            <div className='seat-text1'>
              <b>1200сом</b> с пассажира.
              <p className='seat-text2'>
                  свободных мест: <b>2</b>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Search;