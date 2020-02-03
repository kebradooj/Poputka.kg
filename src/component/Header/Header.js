import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Footer extends Component {
  closeModal = event => {
    const className = event.target.className;

    if(className !== 'content-menu' && className !== 'menu__closeBtn') {}
  }
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <Link to='/' className='nav-logo'></Link>
            <div className='nav-content'>
              <Link className='content-add-bg' to='/modal'>
                <div className='content-add'></div>
              </Link>
              <Link className='content-search' to='/search-page'></Link>
              <div className='content-menu'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}