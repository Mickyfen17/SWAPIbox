import React, { Component } from 'react';
import Button from '../Button/Button'
import classNames from 'classnames';
import ClassNames from '../ClassNamesHelper';
const classnames = new ClassNames

class PlanetCard extends Component {
  constructor() {
    super()
    this.state = {
      fav: false,
      residents: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    if(this.props.residents.length === 0){
      return
    }
    this.props.residents.forEach(resident => {
      this.fetchAPI(resident)
    })
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
    this.setState({
      residents: this.state.residents.concat(json.name),
      fav: this.props.fav
    })
  }

  handleClick() {
    this.setState({ fav: !this.state.fav })
    this.props.handleFavorites(this.props.name, this.state.fav)
  }

  render() {
    const { name, terrain , population, climate, handleFavorites } = this.props
    const { residents, fav } = this.state
    const { cardFavorite, btnFavorite, cardFavoriteFirst, textFavorite } = classnames
    const residentList = residents.map((resident, i) => {
      return (
          <h5 key={i} className={ this.textResident }>{ resident }</h5>
      )
    })

    return (
      <article className={ cardFavorite(fav, this.props.fav) }>
        <h2 className='display-card-header' >{ name }
        <Button
          classNames={ btnFavorite(fav, this.props.fav) }
          handleClick={ this.handleClick }
          title=''
        />
        </h2>
        <h4 className={ cardFavoriteFirst(fav, this.props.fav) } >
          <span>Terrain :</span> { terrain }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
          <span>Population :</span> { population }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
          <span>Climate :</span> { climate }
        </h4>
        <div className='resident-wrapper'>
          <h4>Residents : </h4>
          { residentList }
        </div>
      </article>
    );
  }
}

PlanetCard.propTypes = {
  name: React.PropTypes.string,
  terrain: React.PropTypes.string,
  population: React.PropTypes.string,
  climate: React.PropTypes.string,
  residents: React.PropTypes.arrayOf(React.PropTypes.string),
  handleFavorites: React.PropTypes.func.isRequired
};

export default PlanetCard;