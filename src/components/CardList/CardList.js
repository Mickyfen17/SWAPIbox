import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';
import './CardList.css';


const CardList = ({ people, vehicles, planets }) => {

  const renderVehicle = vehicles.map((vehicle, i) => {
    return (
      <VehicleCards key={i} eachVehicle={ vehicle } />
    )
  })

  return (
    <div className='card-wrapper' >
      { people.length !== 0 && <PeopleCards people={ people } /> }
      { vehicles.length !== 0 && renderVehicle }
      { planets.length !== 0 && <PlanetCards planets={ planets } /> }
    </div>
  )
}

export default CardList;
