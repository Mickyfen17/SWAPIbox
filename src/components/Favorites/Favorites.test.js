import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorites from './Favorites';

describe('testing Favorites', () => {

  it('should accept a property of favorites which is an array', () => {
    const wrapper = mount(
      <Favorites
        favorites={ [] }
        handleFavorites={ () => {} }
      />
    )

    expect(wrapper.props().favorites).toEqual([])
  })

  it('should populate props when data is passed via favorites array', () => {
    const mockFavorite = {
      birth_year: '19BBY',
      name: 'Luke Skywalker',
      homeworld: 'API call',
      species: ['API call'],
      handleFavorites: () => {}
    }
    const wrapper = mount(
      <Favorites favorites={ [ mockFavorite ] } />
    )
    const firstFavProp = wrapper.props().favorites[0]

    expect(firstFavProp).toMatchObject(mockFavorite)
  })

  it('should populate two favorite cards when data for two cards have been recieved', () => {
    const mockFavorite = [{
      birth_year: '19BBY',
      name: 'Luke Skywalker',
      homeworld: 'API call',
      species: ['API call'],
      handleFavorites: () => {}
    },
    {
      cargo_capacity: '1234 lbs',
      name: 'Skycrawler',
      model: 'abc',
      vehicle_class: 'Aircraft',
      passengers: '25',
      handleFavorites: () => {}
    }]
    const wrapper = mount(
      <Favorites favorites={ mockFavorite } />
    )

    expect(wrapper.find('.display-card')).toHaveLength(2)
  })

})