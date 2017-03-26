import React, { Component } from 'react';
import OpeningHeader from '../components/OpeningHeader/OpeningHeader'
import Button from '../components/Button/Button'
import CardList from '../components/CardList/CardList'
import Favorites from '../components/Favorites/Favorites'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      openingCrawl: {},
      selectedContent: [],
      catergory: '',
      favorites: [],
      toggleFavs: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleFavorites= this.handleFavorites.bind(this)
    this.renderFavorites= this.renderFavorites.bind(this)
  }

  componentDidMount() {
    this.fetchOpeningCrawl()
  }

  fetchOpeningCrawl() {
    fetch('https://swapi.co/api/films/')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const index = Math.floor(Math.random() * json.count);
      const { opening_crawl, title, release_date } = json.results[index];
      this.setState({
        openingCrawl: { opening_crawl, title, release_date },
        selectedContent: []
      })
    })
  }

  handleClick(button) {
    const title = button.toLowerCase()
    fetch(`https://swapi.co/api/${title}/`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.setState({
        openingCrawl: {},
        selectedContent: json.results,
        catergory: title,
        toggleFavs: false
      })
    })
  }

  handleFavorites(index, status){
    const inFavorites = this.state.favorites.some(value => value.name === index)
    if(!status && !inFavorites){
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

  renderFavorites() {
    this.setState({
      toggleFavs: !this.state.toggleFavs,
      openingCrawl: {}
    })
  }

  render() {
    const { openingCrawl, selectedContent, catergory, favorites, toggleFavs } = this.state;
    return (
      <div className="App">
        <Button
          classNames='favorite-btn'
          handleClick={ this.renderFavorites }
          title={`Favorites ${ favorites.length }`}
        />
        <h1
          className='main-header'
          onClick={ () => this.fetchOpeningCrawl() }>
          SWAPI-box
        </h1>
        <div className='buttons-wrapper'>
          <Button
            classNames='filter-buttons'
            handleClick={ this.handleClick }
            title='People'
          />
          <Button
            classNames='filter-buttons'
            handleClick={ this.handleClick }
            title='Planets'
          />
          <Button
            classNames='filter-buttons'
            handleClick={ this.handleClick }
            title='Vehicles'
          />
        </div>
        <OpeningHeader { ...openingCrawl } />
        { toggleFavs ?
          <Favorites
            favorites={ this.state.favorites }
            handleFavorites={ this.handleFavorites }
          /> :
          <CardList
            selectedContent={ selectedContent }
            value={ catergory }
            handleFavorites={ this.handleFavorites }
          />
        }
      </div>
    );
  }
}

export default App;