import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Footer extends Component {
  state = {
    
  }

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
              <Link className='content-search' to='/search'></Link>
              <Link className='content-menu' onClick={console.log('CLICKED')}>
                <button className="menu__closeBtn">X</button>
                <ul>
                  <li><Link to='/search'>Найти поездку</Link></li>
                  <li><Link to='/offer'>Предложить поездку</Link></li>
                  <li><Link to='/account/login'><b>Войти</b></Link></li>
                  <li><Link to='/registration'><b>Регистрация</b></Link></li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}