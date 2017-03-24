import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';
import './CardList.css';


const CardList = ({ selectedContent, value, handleFavorites }) => {

  const renderCards = (content, Component) => {
    return content.map((info, i) => {
      return (
        <Component key={i}
          handleFavorites={ handleFavorites }
          { ...info } />
      )
    })
  }

  const getCards = (content, name) => {
    if (name === 'vehicles') {
      return renderCards(content, VehicleCards)
    }
    if (name === 'people') {
      return renderCards(content, PeopleCards)
    }
    if (name === 'planets') {
      return renderCards(content, PlanetCards)
    }
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
