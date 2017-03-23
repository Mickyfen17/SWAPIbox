import React, { Component } from 'react';
import classNames from 'classnames';


class PlanetCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false,
      residents: [],
    }
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
    this.setState({ residents: this.state.residents.concat(json.name) })
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

    const { name, terrain , population, climate } = this.props
    const { residents } = this.state
    const residentList = residents.map(resident => {
      return (
          <h4 className='resident-card-text'>{resident}</h4>
      )
    })
    return (
      <article className={ this.cardFavorite }>
        <h2 className='display-card-header' >{ name }
          <button
            onClick={ () => this.setState({ fav: !this.state.fav }) }
            className={ this.btnFavorite }>
          </button>
        </h2>
        <h4 className='display-card-text first-header' >
          <span>Terrain :</span> { terrain }
        </h4>
        <h4 className='display-card-text' >
          <span>Population :</span> { population }
        </h4>
        <h4 className='display-card-text' >
          <span>Climate :</span> { climate }
        </h4>
        <div className='resident-wrapper'>
          <h4>Residents</h4>
          {residentList}
        </div>
      </article>
    );
  }
}


export default PlanetCards;
