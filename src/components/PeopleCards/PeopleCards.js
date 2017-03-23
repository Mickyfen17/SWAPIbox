import React, { Component } from 'react'
import classNames from 'classnames';


class PeopleCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false,
      homeworld: '',
      species: '',
      population: ''
    }

  }

  componentWillMount() {
    this.fetchAPI(this.props.homeworld);
    this.fetchAPI(this.props.species);
  }

  fetchAPI(value) {
    fetch(value)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.settingState(json)
    })
  }

  settingState(json) {
    if(json.gravity) {
      this.setState({ homeworld: json.name, population: json.population })
    } else {
      this.setState({ species: json.name })
    }
  }

  render() {

    this.cardFavorite = classNames({
      'card-favorite' : this.state.fav,
      'display-card' : true
    }),
    this.btnFavorite = classNames({
      'btn-favorite' : this.state.fav,
      'fav-button' : true
    })

    const { name, handleFavorites } = this.props
    const { homeworld, population, species, fav } = this.state
    return (
      <article className={ this.cardFavorite }>
        <h2 className='display-card-header' >{ name }
          <button
            onClick={ () => {this.setState({ fav: !fav });
                        handleFavorites(name, fav) } }
            className={ this.btnFavorite }>
          </button>
        </h2>
        <h4 className='display-card-text first-header' >
          <span>Homeworld :</span> { homeworld }
        </h4>
        <h4 className='display-card-text' >
          <span>Species :</span> { species }
        </h4>
        <h4 className='display-card-text' >
          <span>Population :</span> { population }
        </h4>
      </article>
    );
  }
}

export default PeopleCards;
