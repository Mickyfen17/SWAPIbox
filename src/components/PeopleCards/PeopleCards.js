import React, { Component } from 'react'

class PeopleCards extends Component {
  constructor() {
    super()
    this.state = {
      person: {}
    }

  }

  componentDidMount() {
    this.props.people.forEach(person => {
      const { name, homeworld, species } = person
      this.fetchAPI(name, homeworld)
      this.fetchAPI(name, species[0])
    })
  }

  fetchAPI(name, value) {
    fetch(value)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      let data = this.state.person
      if(!json.gravity) {
        !data[name] ? data[name] = {} : data[name]
        data[name].species = json.name
      } else {
        !data[name] ? data[name] = {} : data[name]
        data[name] = {[json.name]: json.population}
      }
      this.setState({
        person: data
      })
    })

  }

  render() {
    return (
      <div>
        PeopleCards
      </div>
    )
  }
}

export default PeopleCards;