import React, { Component } from 'react'
import classNames from 'classnames';
import ClassNames from '../ClassNamesHelper';
const classnames = new ClassNames

class VehicleCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false
    }
  }

  render() {
    const { name, model, vehicle_class, passengers, handleFavorites } = this.props
    const { fav } = this.state
    const { cardFavorite, btnFavorite, cardFavoriteFirst, textFavorite } = classnames

    return (
      <article className={ cardFavorite(fav, this.props.fav) }>
        <h2 className='display-card-header' >{ name }
          <button
            className={ btnFavorite(fav, this.props.fav)  }
            onClick={ () => {
              this.setState({ fav: !fav });
              handleFavorites(name, fav) } } >
          </button>
        </h2>
        <h4 className={ cardFavoriteFirst(fav, this.props.fav) } >
          <span>Model :</span> { model }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
          <span>Class :</span> { vehicle_class }
        </h4>
        <h4 className={ textFavorite(fav, this.props.fav) } >
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
