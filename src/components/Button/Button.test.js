import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Button from './Button';


describe('testing Button', () => {

  it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(
     <Button
       handleClick={ ()=> {} }
       title=''
       classNames='filter-buttons'
     />, div);
 });

  it('should contain a prop which will be the text of the button', () => {
    const wrapper = mount(
      <Button
        handleClick={ () => {} }
        title='Planets'
        classNames='filter-buttons'
      />
    )
    expect(wrapper.props().title).toEqual('Planets')
  });

  it('should contain render a button with the prop title as the button text', () => {
    const wrapper = shallow(
      <Button
        handleClick={ () => {} }
        title='People'
        classNames='filter-buttons'
      />
    )
    expect(wrapper.find('.filter-buttons')).toHaveLength(1)
    expect(wrapper.find('.filter-buttons').text()).toEqual('People')
  });

  it(' buttons should have a prop of handleclick', () => {
    const handleClick = jest.fn();

    const wrapper = mount(
      <Button
        handleClick={ handleClick }
        title='Vehicles'
        classNames='filter-buttons'
      />
    );

    const BtnOne = wrapper.find('.filter-buttons')
    BtnOne.simulate('click');

    expect(handleClick.mock.calls.length).toBe(1);
  });
});
