import React from 'react';
import { shallow, mount } from 'enzyme';
import Buttons from './Buttons';

describe('testing Buttons', () => {

  it('should contain three buttons', () => {
    const wrapper = shallow( <Buttons /> )
    
    expect(wrapper.find('button')).toHaveLength(3)
  })

})