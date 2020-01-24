import React, { Component } from 'react'
import './Header.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <a href='/' className='nav-logo'></a>
            <div className='nav-content'>
              <a className='content-add-bg' href='/modal'>
                <div className='content-add'></div>
              </a>
              <a className='content-search' href='/search'></a>
              <a className='content-menu' href='#menu' onClick={()=>{

              }}></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}