import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';
import './Favorites.css';

const Favorites = ({ favorites }) => {
  if(favorites.length === 0) {
    return(
      <h1 className='no-fav-header'>No Favorites Selected</h1>
    )
  }

  const displayFavorites = () => {
    return favorites.map((value, i) => {
      if (value.birth_year) {
        return(
          <PeopleCards key={i} { ...value } />
        )
      }
      if (value.gravity) {
        return (
          <PlanetCards key={i} { ...value } />
        )
      }
      if (value.cargo_capacity) {
        return (
          <VehicleCards key={i} { ...value } />
        )
      }
    })
  }

  return(
    <div className='card-wrapper' >
      { displayFavorites() }
    </div>
  )
}

Favorites.propTypes = {
  favorites: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Favorites;