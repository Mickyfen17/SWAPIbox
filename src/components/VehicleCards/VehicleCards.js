import React, { Component } from 'react'
import classNames from 'classnames';
import './VehicleCards.css';


class VehicleCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false
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

    const { name, model, vehicle_class, passengers } = this.props.eachVehicle
    return (
      <article className={ this.cardFavorite }>
        <h2 className='display-card-header' >{ name }
          <button
            onClick={ () => this.setState({ fav: !this.state.fav }) }
            className={ this.btnFavorite }>
          </button>
        </h2>
        <h4 className='display-card-text first-header' >
          <span>Model :</span> { model }
        </h4>
        <h4 className='display-card-text' >
          <span>Class :</span> { vehicle_class }
        </h4>
        <h4 className='display-card-text' >
          <span>Passengers :</span> { passengers }
        </h4>
      </article>
    );
  }
}

export default VehicleCards;
