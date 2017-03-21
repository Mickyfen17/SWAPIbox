import React, { Component } from 'react';
import './App.css';
import OpeningHeader from '../components/OpeningHeader/OpeningHeader'
import Buttons from '../components/Buttons/Buttons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      openingCrawl: {},
      people: [],
      vehicles: [],
      planets: []
    }
    this.handleClick = this.handleClick.bind(this),
    this.baseState = this.state
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const index = Math.floor(Math.random() * json.count);
      const { opening_crawl, title, release_date } = json.results[index];
      this.setState({
        openingCrawl : { opening_crawl, title, release_date }
      })
    })
  }

  handleClick(value) {
    fetch(`https://swapi.co/api/${value}/`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.resetState()
      this.setState({
        [value] : json.results
      })
    })
  }

  resetState() {
    this.setState(this.baseState)
  }

  render() {
    return (
      <div className="App">
        <h1 className='main-header'>SWAPI-box</h1>
        <Buttons handleClick={ this.handleClick }/>
        <OpeningHeader { ...this.state.openingCrawl } />
      </div>
    );
  }
}

export default App;
