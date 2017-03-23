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
    this.cardFavoriteFirst = classNames({
      'text-favorite' : this.state.fav,
      'display-card-text' : true,
      'first' : true
    })
    this.textFavorite = classNames({
      'text-favorite' : this.state.fav,
      'display-card-text' : true
    })

    const { name, model, vehicle_class, passengers, handleFavorites } = this.props
    const { fav } = this.state
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
          <span>Model :</span> { model }
        </h4>
        <h4 className={ this.textFavorite } >
          <span>Class :</span> { vehicle_class }
        </h4>
        <h4 className={ this.textFavorite } >
          <span>Passengers :</span> { passengers }
        </h4>
      </article>
    );
  }
}

VehicleCards.propTypes = {
  name: React.PropTypes.string,
  model: React.PropTypes.string,
  vehicle_class: React.PropTypes.string,
  passengers: React.PropTypes.string,
  handleFavorites: React.PropTypes.func.isRequired
};

export default VehicleCards;
