import React from 'react';
import { shallow, mount } from 'enzyme';
import OpeningHeader from './OpeningHeader';

describe('testing OpeningHeader', () => {

  it('should contain a section with className opening-header', () => {
    const wrapper = shallow( <OpeningHeader /> )

    expect(wrapper.find('.opening-header')).toHaveLength(1)
  })

  it('should contain inner html elements', () => {
    const wrapper = shallow( <OpeningHeader /> )

    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.find('h3')).toHaveLength(1)
    expect(wrapper.find('h4')).toHaveLength(1)
  })

  it('should accept strings as props and display to page', () => {
    const wrapper = shallow(
      <OpeningHeader
        opening_crawl={'Testing the paragraph'}
        title={'Testing h3'}
        release_date={'Testing h4'}
      />
    )

    expect(wrapper.find('p').text()).toEqual('Testing the paragraph')
    expect(wrapper.find('h3').text()).toEqual('Testing h3')
    expect(wrapper.find('h4').text()).toEqual('Testing h4')
  })

})