/**
 * @jest-environment jsdom
 */   
    import React from 'react';
    import { Provider } from 'react-redux';
    import { BrowserRouter } from 'react-router-dom';
    import { shallow, mount } from 'enzyme';
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
    Enzyme.configure({ adapter: new Adapter() });
    import configureStore from 'redux-mock-store';
    import Login from '../../src/components/login';
    import { ErrorMessage } from '../components/common/form/field';

    const middlewares = [];
    const mockStore = configureStore(middlewares);

    describe('Login Form should work as expected', () => {

      it('should render login form correctly', () => {
        const component = shallow(<Login />);
        expect(component).toMatchSnapshot();
      });

      it('should not let login with out value', () => {
        const store = mockStore({});
        const component = mount(
          <BrowserRouter>
            <Provider store={store}>
              <Login loginFormData={{}}/>
            </Provider>
          </BrowserRouter>
        );

        console.log("Text Component: ", component);
        component.find('button').simulate('click');
      });

    });