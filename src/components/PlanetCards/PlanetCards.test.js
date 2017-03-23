import React from 'react';
import { shallow, mount } from 'enzyme';
import PlanetCards from './PlanetCards';

describe('testing PlanetCards', () => {

  it('should have a default state', () => {
    const wrapper = mount(
      <PlanetCards
        residents={ [] }
        handleFavorites={ () => {} }
      />
    )
    const state = wrapper.state();

    expect(state.fav).toEqual(false)
    expect(state.residents).toEqual([])
  })

  it('should be able to pass data as a prop', () => {
    const mockPlanet = {
      name: 'Alderaan',
      terrain: 'grasslands, mountains',
      population: '200000000',
      climate: 'temperate',
      handleFavorites: () => {}
    }
    const wrapper = mount(
      <PlanetCards
        residents={ ['API call'] }
        { ...mockPlanet }
      />
    )

    expect(wrapper.props()).toMatchObject(mockPlanet)
  })

  it('should display content when data is passed as a prop', () => {
    const mockPlanet = {
      name: 'Alderaan',
      terrain: 'grasslands, mountains',
      population: '200000000',
      climate: 'temperate',
      handleFavorites: () => {}
    }
    const wrapper = mount(
      <PlanetCards
        residents={ ['API call'] }
        { ...mockPlanet }
      />
    )

    expect(wrapper.find('.display-card').text())
    .toEqual('AlderaanTerrain : grasslands, mountainsPopulation : 200000000Climate : temperateResidents : ')
  })

  it('should be able to toggle fav state on click of fav button', () => {
    const mockPlanet = {
      name: 'Alderaan',
      terrain: 'grasslands, mountains',
      population: '200000000',
      climate: 'temperate',
      handleFavorites: () => {}
    }
    const wrapper = mount(
      <PlanetCards
        residents={ ['API call'] }
        { ...mockPlanet }
      />
    )
    const favButton = wrapper.find('button')
    let state = wrapper.state()

    expect(state.fav).toEqual(false)

    favButton.simulate('click')
    state = wrapper.state()

    expect(state.fav).toEqual(true)
  })

})