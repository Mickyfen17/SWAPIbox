import React, { Component } from 'react'
import classNames from 'classnames';


class PeopleCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false,
      homeworld: '',
      species: '',
      language: '',
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
      this.setState({ species: json.name, language: json.language })
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
    this.cardFavoriteFirst = classNames({
      'text-favorite' : this.state.fav,
      'display-card-text' : true,
      'first' : true
    })
    this.textFavorite = classNames({
      'text-favorite' : this.state.fav,
      'display-card-text' : true
    })

    const { name, handleFavorites } = this.props
    const { homeworld, population, species, language, fav } = this.state
    return (
      <article className={ this.cardFavorite }>
        <h2 className='display-card-header' >{ name }
          <button
            onClick={ () => {this.setState({ fav: !fav });
                        handleFavorites(name, fav) } }
            className={ this.btnFavorite }>
          </button>
        </h2>
        <h4 className={ this.cardFavoriteFirst } >
          <span>Homeworld :</span> { homeworld }
        </h4>
        <h4 className={ this.textFavorite } >
          <span>Species :</span> { species }
        </h4>
        <h4 className={ this.textFavorite } >
          <span>Language :</span> { language }
        </h4>
        <h4 className={ this.textFavorite } >
          <span>Population :</span> { population }
        </h4>
      </article>
    );
  }
}

PeopleCards.propTypes = {
  homeworld: React.PropTypes.string.isRequired,
  species: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default PeopleCards;
