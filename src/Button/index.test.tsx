import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Button from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button 组件', () => {
  it('renders the text by render', () => {
    const text = '按钮内容'
    const wrapper = render(<Button text={text}></Button>)
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.text()).toEqual(text)
  })
  /**
* 测试： button 正常点击
*/
  it('onClick', () => {
    const onclick = jest.fn()
    const wrapper = shallow(<Button onClick={onclick}>可点按钮</Button>)
    wrapper.simulate('click')
    expect(onclick).toBeCalled()
  })

  /**
* 测试： button 正常点击
*/
  it('onClick disabled', () => {
    const onclick = jest.fn()
    const wrapper = shallow(<Button onClick={onclick} disabled>禁用按钮</Button>)
    wrapper.simulate('click')
    expect(onclick).not.toBeCalled()
  })


});
