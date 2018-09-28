/**
 * @jest-environment jsdom
 */
import  React  from 'react';

import { shallow } from 'enzyme';

import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import  Info   from '../../src/components/common/form/info';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('Info renders correctly', () => {
  const component = shallow(<Info message="Error message" type="error" />);

  expect(component).toMatchSnapshot();
  expect(component.prop('message')).toEqual('Error message');
});