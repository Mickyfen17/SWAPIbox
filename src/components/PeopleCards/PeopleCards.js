import React, { Component } from 'react'

class PeopleCards extends Component {
  constructor() {
    super()
    this.state = {
      fav: false,
      homeworld: '',
      species: ''
    }

  }

  // componentDidMount() {
  //   this.props.people.forEach(person => {
  //     const { name, homeworld, species } = person
  //     this.fetchAPI(name, homeworld)
  //     this.fetchAPI(name, species[0])
  //   })
  // }

  // fetchAPI(name, value) {
  //   fetch(value)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((json) => {
  //     this.settingState(name, json)
  //   })
  // }
  //
  // settingState(name, json) {
  //   let data = this.state.allPeople
  //   if(!data[name]) data[name] = {}
  //
  //   if(!json.gravity) {
  //     data[name].species = json.name
  //   } else {
  //     data[name].world = json.name
  //     data[name].population = json.population
  //   }
  //   this.setState({
  //     allPeople: data
  //   })
  // }
  //
  // renderPeopleCard(){
  //   // console.log(this.state.allPeople);
  //   return Object.keys(this.state.allPeople).map((person, i) => {
  //     console.log(this.state.allPeople[person]);
  //     return(
  //       <article>
  //         {person}
  //         <li>{this.state.allPeople[person].species}</li>
  //         <li>{this.state.allPeople[person].world} : {this.state.allPeople[person].population}</li>
  //       </article>
  //     )
  //   })
  // }

  render() {
    // const test = this.state.person.map((person) => {
    //   return(
    //     <article>
    //       {person.name}
    //       <li>{person.species}</li>
    //       <li>{person.world} : {person.worldPopulation}</li>
    //     </article>
    //   )
    // })
    return (
      <div>
        HELLO
      </div>
    )
  }
}

export default PeopleCards;