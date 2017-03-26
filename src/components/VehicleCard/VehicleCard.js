import React, { Component } from 'react'
import Button from '../Button/Button'
import classNames from 'classnames';
import ClassNames from '../ClassNamesHelper';
const classnames = new ClassNames

class VehicleCard extends Component {
  constructor() {
    super()
    this.state = {
      fav: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ fav: !this.state.fav })
    this.props.handleFavorites(this.props.name, this.state.fav)
  }

  render() {
    const { name, model, vehicle_class, passengers, handleFavorites } = this.props
    const { fav } = this.state
    const { cardFavorite, btnFavorite, cardFavoriteFirst, textFavorite } = classnames

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

VehicleCard.propTypes = {
  name: React.PropTypes.string,
  model: React.PropTypes.string,
  vehicle_class: React.PropTypes.string,
  passengers: React.PropTypes.string,
  handleFavorites: React.PropTypes.func.isRequired
};

export default VehicleCard;
