import React from 'react';
import { shallow, mount } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('testing VehicleCard', () => {

  it('should have a default state', () => {
    const wrapper = mount(
      <VehicleCard
        handleFavorites ={ () => {} }
      />
    )
    const state = wrapper.state();

    expect(state.fav).toEqual(false)
  })

  it('should be able to pass data as a prop', () => {
  const mockVehicle = {
    name: 'Skycrawler',
    model: 'abc',
    vehicle_class: 'Aircraft',
    passengers: '25',
    handleFavorites: () => {}
  }
    const wrapper = mount(
      <VehicleCard
        { ...mockVehicle }
      />
    )

    expect(wrapper.props()).toMatchObject(mockVehicle)
  })

  it('should display content when data is passed as a prop', () => {
  const mockVehicle = {
    name: 'Skycrawler',
    model: 'abc',
    vehicle_class: 'Aircraft',
    passengers: '25',
    handleFavorites: () => {}
  }
    const wrapper = mount(
      <VehicleCard
        { ...mockVehicle }
      />
    )

    expect(wrapper.find('.display-card').text())
    .toEqual('SkycrawlerModel : abcClass : AircraftPassengers : 25')
  })

  it('should be able to toggle fav state on click of fav button', () => {
  const mockVehicle = {
    name: 'Skycrawler',
    model: 'abc',
    vehicle_class: 'Aircraft',
    passengers: '25',
    handleFavorites: () => {}
  }
    const wrapper = mount(
      <VehicleCard
        { ...mockVehicle }
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