import React, { Component } from 'react'
import Routes from './Routes'

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
        <Routes />
      </div>
    )
  }
}