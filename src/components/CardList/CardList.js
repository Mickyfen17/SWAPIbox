import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';
import './CardList.css';


const CardList = ({ selectedContent, value, handleFavorites }) => {

  const renderVehicle = (content) => {
    return content.map((vehicle, i) => {
      return(
        <VehicleCards key={i}
          handleFavorites={ handleFavorites }
          { ...vehicle } />
      )
    })
  }
  const renderPeople = (content) => {
    return content.map((person, i) => {
      return (
        <PeopleCards key={i}
          handleFavorites={ handleFavorites }
          { ...person } />
      )
    })
  }
  const renderPlanet = (content) => {
    return content.map((planet, i) => {
      return (
        <PlanetCards key={i}
          handleFavorites={ handleFavorites }
          { ...planet } />
      )
    })
  }

  const getCards = (content, name) => {
    if (name === 'vehicles') {
      return renderVehicle(content)
    }
    if (name === 'people') {
      return renderPeople(content)
    }
    if (name === 'planets') {
      return renderPlanet(content)
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
