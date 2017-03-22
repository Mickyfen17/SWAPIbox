import React from 'react'
import './VehicleCards.css';


const VehicleCards = ({ vehicles }) => {

  const vehicleList = vehicles.map((vehicle, i) => {
    const { name, model, vehicle_class, passengers } = vehicle
    return(
      <article className='display-card' key={i}>
        <h2 className='display-card-header' >{ name }
          <button className='fav-button'></button>
        </h2>
        <h4 className='display-card-text first-header' ><span>Model :</span> { model }</h4>
        <h4 className='display-card-text' ><span>Class :</span> { vehicle_class }</h4>
        <h4 className='display-card-text' ><span>Passengers :</span> { passengers }</h4>
      </article>
    )
  })
  return (
    <div className='vehicle-wrapper'>
      { vehicleList }
    </div>
  )
}

export default VehicleCards;
