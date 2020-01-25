import React, { Component } from 'react'
import Header from './component/Header/Header'
import Registration from './component/Registration/Registration';
import Offer from './component/Offer/Offer';
import SignUp from './component/SignUp/SignUp';
import About from './component/About/About';



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
        <Offer />
        <Registration />
        <SignUp />
        <About />


      </div>
    )
  }
}

