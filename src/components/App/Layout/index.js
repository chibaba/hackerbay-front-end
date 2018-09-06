// @flow

import React from 'react';
import styled from 'styled-components';
import { Layout, Card } from 'antd';

const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  display: block;
  margin: auto;
  @media (min-width: 768px) {
    width: 50vw;
    min-width: 768px;
  }
`;

const StyledCard = styled(Card)``;

const AppLayout = ({ children }) => {
  return (
    <StyledLayout>
      <CardContainer>
        <StyledCard hoverable>
        {children}
        </StyledCard>
      </CardContainer>
    </StyledLayout>
  );
};

export default AppLayout;
