import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import './CardList.css';


const CardList = ({ selectedContent, value, handleFavorites, favoriteKeys }) => {

  const renderCards = (content, Component) => {
    return content.map((info, i) => {
      const isFavorite = favoriteKeys.includes(info.name)
      return (
        <Component key={i}
          handleFavorites={ handleFavorites }
          { ...info }
          fav={ isFavorite }
        />
      )
    })
  }

  const getCards = (content, name) => {
    if (name === 'vehicles') return renderCards(content, VehicleCard)
    if (name === 'people') return renderCards(content, PeopleCard)
    if (name === 'planets') return renderCards(content, PlanetCard)
  }

  return (
    <div className='card-wrapper' >
      { getCards(selectedContent, value) }
    </div>
  )
}

CardList.propTypes = {
  handleFavorites: React.PropTypes.func.isRequired,
  selectedContent: React.PropTypes.arrayOf(React.PropTypes.object),
  value: React.PropTypes.string.isRequired
};

export default CardList;
