import React, { useState } from 'react';

import {
  Container,
  Wrapper,
  Inputs,
  UsernameInput,
  SubmitButton,
} from './styles';

import Header from '../Header';
import Graph from '../Graph';

import api from '../../services/api';

const Layout: React.FC = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState([
    {
      name: '',
      dates: {
        firstCommitDate: Date.now(),
        lastCommitDate: Date.now(),
      },
    },
  ]);

  async function handleSubmit() {
    const response = await api.get(`/timeline/${username}`);

    setData(response.data);
    console.log(response.data);
  }

  return (
    <Container>
      <Wrapper>
        <Header />
        <Inputs>
          <UsernameInput
            onChange={e => setUsername(e.target.value)}
            placeholder='GitHub username'
          />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </Inputs>
      </Wrapper>
      <Graph data={data} />
    </Container>
  );
};

export default Layout;
