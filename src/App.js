import React, { Component } from 'react'
import Header from './component/Header/Header'

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
        <Header
          
        />
      </div>
    )
  }
}

