/**
 * @jest-environment jsdom
 */

    import React from 'react';
    import { shallow } from 'enzyme';
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    // React 16 Enzyme adapter
    Enzyme.configure({ adapter: new Adapter() });
    import  Signup  from '../../src/components/signup';

    it('should render signup form correctly', () => {
      const component = shallow(<Signup />);

      expect(component).toMatchSnapshot();
    });