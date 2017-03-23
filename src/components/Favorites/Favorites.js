import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';
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
          <PeopleCards
            key={i} { ...value }
            handleFavorites={ handleFavorites }
            fav={ true }/>
        )
      }
      if (value.gravity) {
        return (
          <PlanetCards
            key={i} { ...value }
            handleFavorites={ handleFavorites }
            fav={ true }
          />
        )
      }
      if (value.cargo_capacity) {
        return (
          <VehicleCards
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