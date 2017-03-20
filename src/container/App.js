import React, { Component } from 'react';
import './App.css';
import OpeningHeader from '../components/OpeningHeader/OpeningHeader'
import Buttons from '../components/Buttons/Buttons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      openingCrawl: {}
    }
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

  render() {
    return (
      <div className="App">
        <h1>SWAPIbox</h1>
        <OpeningHeader { ...this.state.openingCrawl } />
        <Buttons/>
      </div>
    );
  }
}

export default App;
