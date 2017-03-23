import React from 'react';
import { shallow, mount } from 'enzyme';
import CardList from './CardList';

describe('testing CardList', () => {

  it('should render Person cards if passed People props ', () => {
    const mockPeople = [
   { name: 'planet',
     species: 'kangaroos',
     population: 100,
     climate: 'icy',
     language: 'piglatin',
     homeworld: []
   }];
    const wrapper = mount( <CardList
                              selectedContent={ mockPeople }
                              category='people'
                              />)
    expect(wrapper.find('.card-wrapper').length).toBe(1);
    // expect(wrapper.find('PeopleCards').length).toBe(1);
  });
});
