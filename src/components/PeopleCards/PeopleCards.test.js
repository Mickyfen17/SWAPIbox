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
});