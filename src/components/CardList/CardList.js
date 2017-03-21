import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';

const CardList = (props) => {
  return (
    <div>
      <PeopleCards people={props.people}/>
      <PlanetCards planets={props.planets}/>
      <VehicleCards vehicles={props.vehicles}/>
    </div>
  )

}

export default CardList;
