import styled from 'styled-components';

import { Github } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  height: 80px;

  align-items: center;
  justify-content: center;
`;

export const GitHubIcon = styled(Github)`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  color: var(--white);

  margin-right: 15px;
`;
