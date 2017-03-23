import React, { Component } from 'react';
import './App.css';
import OpeningHeader from '../components/OpeningHeader/OpeningHeader'
import Buttons from '../components/Buttons/Buttons'
import CardList from '../components/CardList/CardList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      openingCrawl: {},
      selectedContent: [],
      catergory: '',
      favorites: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleFavorites= this.handleFavorites.bind(this)
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
      this.setState({
        openingCrawl: {},
        selectedContent : json.results,
        catergory : value
      })
    })
  }

  handleFavorites(index, status){
    console.log(index, status);
    if(!status){
      this.addFavorite(index);
    } else {
      this.removeFavorite(index);
    }
  }

  addFavorite(index){
    const favorites = this.state.selectedContent.filter(value => {
      return value.name === index;
    })
    this.setState({ favorites: this.state.favorites.concat(favorites) })

  }

  removeFavorite(index){
    const favorites = this.state.favorites.filter(value => {
      return value.name !== index;
    })
    this.setState({ favorites: favorites})
  }

  render() {
    const { openingCrawl, selectedContent, catergory } = this.state;
    return (
      <div className="App">
        <h1 className='main-header'>SWAPI-box</h1>
        <Buttons handleClick={ this.handleClick }/>
        <OpeningHeader { ...openingCrawl } />
        <CardList
          selectedContent={ selectedContent }
          value={ catergory }
          handleFavorites={this.handleFavorites}/>
      </div>
    );
  }
}

export default App;
