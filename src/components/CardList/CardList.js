import React from 'react';

const CardList = (props) => {
  return (
    <div>
      <PeopleCards people={props.people}/>
      <VehicleCards vehicles={props.vehicles}/>
      <PlanetCards planets={props.planets}/>
    </div>
  )

}

export default CardList;
