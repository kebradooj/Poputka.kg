import React, { Component } from 'react';
import axios from 'axios';

import './Search.css'

class Search extends Component {
  state={
    ways:{
      from: "",
      to: ""
    },
    data:[],
    filteredData:[],
  }

  componentDidMount = async () => {
    await this.fetchData();
    await this.handleFind();
  }

  handleInput = async e => {
    let obj = {
      'visit-inp1': 'from',
      'visit-inp2': 'to'
    }
    let direction = obj[e.target.className];
    const ways = {...this.state.ways};
    ways[direction] = e.target.value;
    
    
    await this.setState({ ways });
    const filteredData = this.find();
    await this.setState({ filteredData })
  }

  fetchData = async () => {
    const response = await axios.get('http://localhost:8000/ways');
    this.setState ({ data: response.data })
  }
  find = () => {
    return this.state.data.filter(item=>{
      return new RegExp(this.state.ways.to,'gi').test(item.to) && new RegExp(this.state.ways.from,'gi').test(item.from);
    })
  }

  handleFind = ()=>{
    const filteredData = this.find();
    this.setState({ filteredData })
  }

  render() {
    return (
      <div id='container'>

        <div className='visit-search'>
          <div className='visits'>
            <div className='visit-left'>
              <input onChange={this.handleInput} className='visit-inp1' type='text' placeholder='From' value={this.state.ways.from} />
            </div>
            <div className='visit-midpoint'></div>
            <div className='visit-right'>
              <input onChange={this.handleInput} className='visit-inp2' type='text' placeholder='To' value={this.state.ways.to} />
            </div>
            <button onClick={this.handleFind} className='btn'>Find trips</button>
          </div>
        </div>

        {this.state.filteredData.map( item => (<div className='ads'>
          <div className='ads-logoCar'></div>
          <div className='ads-toGo'>
            <div className='toGo-text1'><b>{item.date}</b>
              <span className='toGo-hourIcon'></span>
              <span>{item.time}</span>
              <p className='toGo-text2'>{item.from}<span className='toGo-arrowIcon'></span>{item.to}</p>
            </div>
          </div>
          <div className='toGo-seats'>
            <div className='seat-text1'>
              <b>{item.price}сом</b> с пассажира.
              <p className='seat-text2'>
                свободных мест: <b>{item.vacancies}</b>
              </p>
            </div>
          </div>
        </div>))}

      </div>
    );
  }
}

export default Search;