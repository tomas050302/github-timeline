import React from 'react';

import { Container, GitHubIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GitHubIcon />
      <h1>GitHub Timeline</h1>
    </Container>
  );
};

export default Header;
