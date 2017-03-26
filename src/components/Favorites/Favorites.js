import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import './Favorites.css';

const Favorites = ({ favorites, handleFavorites }) => {
  
  if(favorites.length === 0) {
    return(
      <h1 className='no-fav-header'>No Favorites Selected</h1>
    )
  }

  const displayFavorites = () => {
    return favorites.map((value, i) => {
      if (value.birth_year) {
        return(
          <PeopleCard
            key={i} { ...value }
            handleFavorites={ handleFavorites }
            fav={ true }/>
        )
      }
      if (value.gravity) {
        return (
          <PlanetCard
            key={i} { ...value }
            handleFavorites={ handleFavorites }
            fav={ true }
          />
        )
      }
      if (value.cargo_capacity) {
        return (
          <VehicleCard
            key={i} { ...value }
            handleFavorites={ handleFavorites }
            fav={ true }
          />
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