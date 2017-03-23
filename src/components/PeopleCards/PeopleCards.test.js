import React from 'react';
import { shallow, mount } from 'enzyme';
import PeopleCards from './PeopleCards';

describe('testing CardList', () => {

  it('has a state of fav defaulted false', () => {
    const wrapper = shallow(<PeopleCards/>);
    expect(wrapper.state().fav).toEqual(false);
  });

  it('has a state of homeworld defaulted to an empty string', () => {
    const wrapper = shallow(<PeopleCards/>);
    expect(wrapper.state().homeworld).toEqual('');
});

  it('has a state of species defaulted to an empty string', () => {
    const wrapper = shallow(<PeopleCards/>);
    expect(wrapper.state().species).toEqual('');
  });

  it('has a state of language defaulted to an empty string', () => {
    const wrapper = shallow(<PeopleCards/>);
    expect(wrapper.state().language).toEqual('');
  });

  it('has a state of population defaulted to an empty string', () => {
    const wrapper = shallow(<PeopleCards/>);
    expect(wrapper.state().population).toEqual('');
  });

  it('should receive props and render ', () => {
    const wrapper = mount(  <PeopleCards
                                name='bob'
                                homeworld='cananda'
                                species='bro'
                                language='piglatin'
                                population='100'/>
                            )
    expect(wrapper.props().name).toBe('bob')
    expect(wrapper.props().homeworld).toBe('cananda')
    expect(wrapper.props().species).toBe('bro')
    expect(wrapper.props().population).toBe('100')
    expect(wrapper.props().language).toBe('piglatin')
    expect(wrapper.find('PeopleCards').length).toBe(1)
  });

  it('should receive props, update state, and render ', () => {
    const wrapper = mount(  <PeopleCards
                                name='bob'
                                homeworld='canada'
                                species='bro'
                                language='piglatin'
                                population='10'/>
                            )
    const mockPeople = {
        name: 'planet',
        species: 'kangaroos',
        population: 100,
        climate: 'icy',
        language: 'piglatin',
        homeworld: 'noob',
      }

    expect(wrapper.props().name).toBe('bob')
    expect(wrapper.find('PeopleCards').length).toBe(1)

    wrapper.setState({
      homeworld: mockPeople.homeworld,
      species: mockPeople.species,
      population: mockPeople.population,
      language: mockPeople.language
    });

    expect(wrapper.state().homeworld).toEqual('noob')
    expect(wrapper.state().species).toEqual('kangaroos')
    expect(wrapper.state().population).toEqual(100)
  });
});
