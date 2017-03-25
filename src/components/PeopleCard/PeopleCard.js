import React, { Component } from 'react'
import classNames from 'classnames';
import ClassNames from '../ClassNamesHelper';
const classnames = new ClassNames

class PeopleCard extends Component {
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
    const { name, handleFavorites } = this.props
    const { homeworld, population, species, language, fav } = this.state
    const { cardFavorite, btnFavorite, cardFavoriteFirst, textFavorite } = classnames

    return (
      <article className={ cardFavorite(fav, this.props.fav) } >
        <h2 className='display-card-header' > { name } </h2>
        <button
          className={ btnFavorite(fav, this.props.fav) }
          onClick={ () => {
            this.setState({ fav: !fav }) ;
            handleFavorites(name, fav) } } >
        </button>
        <h4 className={ cardFavoriteFirst(fav, this.props.fav) } >
          <span>Homeworld :</span> { homeworld }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
          <span>Species :</span> { species }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
          <span>Language :</span> { language }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
          <span>Population :</span> { population }
        </h4>
      </article>
    );
  }
}

PeopleCard.propTypes = {
  homeworld: React.PropTypes.string.isRequired,
  species: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default PeopleCard;
