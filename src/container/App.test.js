import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('testing App', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a div with a class of App', () => {
    const wrapper = shallow( <App /> )

    expect(wrapper.find('.App')).toHaveLength(1)
  })

  it('should have default state values', () => {
    const wrapper = shallow( <App /> )
    const state = wrapper.state();

    expect(state.openingCrawl).toEqual({})
    expect(state.selectedContent).toEqual([])
    expect(state.catergory).toEqual('')
    expect(state.favorites).toEqual([])
    expect(state.toggleFavs).toEqual(false)
  })

  it('should contain a favorite button', () => {
    const wrapper = shallow( <App /> )

    expect(wrapper.find('.favorite-btn')).toHaveLength(1)
  })

  it('should be able to click on favorites button and toggle state', () => {
    const wrapper = mount( <App /> )
    const favBtn = wrapper.find('.favorite-btn');
    let state = wrapper.state();

    expect(state.toggleFavs).toEqual(false);

    favBtn.simulate('click')
    state = wrapper.state()

    expect(state.toggleFavs).toEqual(true);
  })

  it('should display warning when favorites button is click and no favorite are found', () => {
    const wrapper = mount( <App /> )
    const favBtn = wrapper.find('.favorite-btn');

    expect(wrapper.find('.no-fav-header')).toHaveLength(0);
    favBtn.simulate('click')
    expect(wrapper.find('.no-fav-header')).toHaveLength(1);
  })

  it('should display a favorite card button is click and a favorite prop is passed', () => {
    const mockFavorite = {
      cargo_capacity: '1234 lbs',
      name: 'Skycrawler',
      model: 'abc',
      vehicle_class: 'Aircraft',
      passengers: '25',
      handleFavorites: () => {}
    }
    const wrapper = mount( <App /> )
    const favBtn = wrapper.find('.favorite-btn');

    wrapper.setState({ favorites: [ mockFavorite ]})
    favBtn.simulate('click')

    expect(wrapper.find('.display-card').text())
    .toEqual('SkycrawlerModel : abcClass : AircraftPassengers : 25');
  })

  it('should display movie crawl content on origial render', () => {
    const mockCrawl = {
      opening_crawl: 'Luke Skywalker has vanished!',
      release_date: '2015-12-11',
      title: 'The Force Awakens'
    }
    const wrapper = mount( <App /> )
    const state = wrapper.state();

    expect(wrapper.find('.opening-header').text())
    .toEqual('');

    wrapper.setState({ openingCrawl: mockCrawl})

    expect(wrapper.find('.opening-header').text())
    .toEqual('Luke Skywalker has vanished!The Force Awakens2015-12-11');
  })

})
