import React from 'react';
import PeopleCards from '../PeopleCards/PeopleCards';
import VehicleCards from '../VehicleCards/VehicleCards';
import PlanetCards from '../PlanetCards/PlanetCards';
import './CardList.css';


const CardList = ({ selectedContent, value }) => {

  const renderVehicle = (content) => {
    return content.map((vehicle, i) => {
      return(
        <VehicleCards key={i} eachVehicle={ vehicle } />
      )
    })
  }

  const getCards = (content, name) => {
    if (name === 'vehicles') {
      return renderVehicle(content)
    }
    // if (value === 'people') {
    //   renderPeople(selectedContent)
    // }
    //
    //
    // if (value === 'planets') {
    //   renderPlanet(selectedContent)
    // }
  }


  // const renderPeople = (content) => {
  //   return content.map(person => {
  //     return <Person name={person.name} homeworld={person.homeworld}/>
  //   })
  // }

  // const settingState = (name, json) => {
  //   let data = {}
  //
  //   if(!data[name]) data[name] = {}
  //
  //   if(!json.gravity) {
  //     data[name].species = json.name
  //   } else {
  //     data[name].world = json.name
  //     data[name].population = json.population
  //   }
  //   console.log(data);
  //   return (
  //     <h1>HERE</h1>
  //     // <PeopleCards key={ Date.now() } eachPerson={ data } />
  //   )
  // }

  // const fetchAPI = (name, value) => {
  //   fetch(value)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((json) => {
  //     settingState(name, json)
  //   })
  // }

  // const renderPeople = people.forEach(person => {
  //   const { name, homeworld, species } = person
  //   fetchAPI(name, homeworld)
  //   fetchAPI(name, species[0])
  // })

  return (
    <div className='card-wrapper' >
      { getCards(selectedContent, value) }
    </div>
  )
}

export default CardList;