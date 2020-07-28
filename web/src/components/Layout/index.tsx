import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../Header';
import Inputs from '../Inputs';
import Graph from '../Graph';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Inputs />
        <Graph />
      </Wrapper>
    </Container>
  );
};

export default Layout;
