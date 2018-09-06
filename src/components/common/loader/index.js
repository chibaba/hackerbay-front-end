// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import LoadingBar from 'react-redux-loading-bar';
import { Icon } from 'antd';

const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoaderIcon = styled(Icon)`
  color: ${({ theme }) => theme.primary};
`;

export const HeaderLoader = () => <LoadingBar style={{ backgroundColor: '#1890ff' }}/>;

export const LoaderComponent = () => (
   <LoaderWrapper>
     <LoaderIcon type="loading" />
   </LoaderWrapper>
);

export const loadComponent = (componentLoader: Function) => {
  class Loader extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await componentLoader();
      this.setState({ component });
    }

    render() {
      const { component: Comp } = this.state;

      return Comp ? <Comp {...this.props} /> : <LoaderComponent />;
    }
  }

  return Loader;
};
