import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('testing App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('has a div with a class of App', () => {
    const wrapper = shallow( <App /> )

    expect(wrapper.find('.App')).toHaveLength(1)
  })

  it('should have default state values', () => {
    const wrapper = shallow( <App /> )
    const state = wrapper.state();
    
    expect(state.openingCrawl).toEqual({})
    expect(state.people).toEqual([])
    expect(state.vehicles).toEqual([])
    expect(state.planets).toEqual([])
  })

})
