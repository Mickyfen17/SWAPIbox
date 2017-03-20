import React, { Component } from 'react';
import './App.css';
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
    const { opening_crawl, title, release_date } = this.state.openingCrawl
    return (
      <div className="App">
        <h1>SWAPIbox</h1>
        <p>{ opening_crawl }</p>
        <h3>{ title }</h3>
        <h4>{ release_date }</h4>
        <Buttons/>
      </div>
    );
  }
}

export default App;
