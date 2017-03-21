import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';

const CardList = ({ people, vehicles, planets }) => {
  return (
    <div>
      { people.length !== 0 && <PeopleCards people={ people } /> }
      { vehicles.length !== 0 && <VehicleCards vehicles={ vehicles } /> }
      { planets.length !== 0 && <PlanetCards planets={ planets } /> }
    </div>
  )

}

export default CardList;
