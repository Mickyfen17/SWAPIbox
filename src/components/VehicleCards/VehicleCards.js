import React, { Component } from 'react'
import './VehicleCards.css';


class VehicleCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false
    }
  }
  render() {
    const { name, model, vehicle_class, passengers } = this.props.eachVehicle
    return (
      <article className='display-card'>
        <h2 className='display-card-header' >{ name }
          <button
            onClick={ () => this.setState({ fav: !this.state.fav }) }
            className='fav-button'>
          </button>
        </h2>
        <h4 className='display-card-text first-header' ><span>Model :</span> { model }</h4>
        <h4 className='display-card-text' ><span>Class :</span> { vehicle_class }</h4>
        <h4 className='display-card-text' ><span>Passengers :</span> { passengers }</h4>
      </article>
    );
  }
}

export default VehicleCards;