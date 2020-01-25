import React, { Component } from 'react'
import Header from './component/Header/Header'
import HomePage from './component/Homepage/HomePage'
import Footer from './component/Footer/Footer'

export default class App extends Component {
  state = {
    modalIsShow: false
  }

  modalIsShow = event => {
    this.setState({
      modalIsShow: !this.state.modalIsShow,
    })
  }
  render() {
    return (
      <div className='App'>
        <Header/>
        <HomePage />
        <Footer />
      </div>
    )
  }
}

