import React, { Component } from 'react'
import Header from './component/Header/Header'
import Registration from './component/Registration/Registration';
import Offer from './component/Offer/Offer';

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
        <Registration />
        <Offer />

      </div>
    )
  }
}

