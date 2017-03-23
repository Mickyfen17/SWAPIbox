import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Buttons from './Buttons';


describe('testing Buttons', () => {

  it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<Buttons />, div);
 });

  it('should contain three buttons', () => {
    const wrapper = shallow( <Buttons /> )

    expect(wrapper.find('button')).toHaveLength(3)
  });

  it(' buttons should have a prop of handleclick', () => {
    const handleClick = jest.fn();

    const wrapper = mount( <Buttons handleClick={ handleClick }/> );
    const BtnOne = wrapper.find('.filter-buttons').first();
    const BtnTwo = wrapper.find('.filter-buttons').at(1)
    const BtnThree = wrapper.find('.filter-buttons').last()
    BtnOne.simulate('click');
    BtnTwo.simulate('click');
    BtnThree.simulate('click');

    expect(handleClick.mock.calls.length).toBe(3);
  });
});
