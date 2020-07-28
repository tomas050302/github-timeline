import React from 'react';

import { Container, Wrapper } from './styles';

import Header from '../Header';
import Graph from '../Graph';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Graph />
      </Wrapper>
    </Container>
  );
};

export default Layout;
