import React from 'react';

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
