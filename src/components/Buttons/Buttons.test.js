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





























// import React              from 'react';
// import { shallow, mount } from 'enzyme';
// import Buttons            from './Buttons';
//
// describe('testing Button component', () => {
//   it('Buttons should render', () => {
//     const wrapper = shallow ( <Buttons />)
//
//     expect(wrapper.find('button').length).toEqual(3)
//   })
//
//   it('onclick function should fire on last button click', () => {
//
//     const mock    = jest.fn()
//     const wrapper = mount( <Buttons
//                                 peopleData={mock}
//                                 shipData={ mock }
//                                 planetData={ mock }
//                                  />)
//
//     const btn1  = wrapper.find('.button').first()
//     const btn2  = wrapper.find('.button').at(1)
//     const btn3  = wrapper.find('.button').last()
//
//     btn1.simulate('click')
//     btn2.simulate('click')
//     btn3.simulate('click')
//
//     expect(mock).toHaveBeenCalledTimes(3)
//   })
//
//   it('Button should receivve three functions as props', () => {
//
//     const mock    = jest.fn()
//     const wrapper = mount( <Buttons
//                                 peopleData={ mock }
//                                 shipData={ mock }
//                                 planetData={ mock }/>)
//
//     expect(wrapper.props().peopleData).toBeDefined()
//     expect(wrapper.props().shipData).toBeDefined()
//     expect(wrapper.props().planetData).toBeDefined()
//   })
// })
