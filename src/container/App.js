import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList/CardList'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    fetch('https:swapi.co/api/planets/')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SWAPIbox</h1>

      </div>
    );
  }
}

export default App;
