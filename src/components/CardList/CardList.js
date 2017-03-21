import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';

const CardList = ({ people, vehicles, planets }) => {
  return (
    <div>
      <PeopleCards people={ people } />
      <VehicleCards vehicles={ vehicles } />
      <PlanetCards planets={ planets } />
    </div>
  )

}

export default CardList;
