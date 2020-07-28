import React, { useState } from 'react';
import api from '../../services/api';

import { Container, UsernameInput, SubmitButton } from './styles';

const Inputs: React.FC = () => {
  const [username, setUsername] = useState('');

  async function handleSubmit() {
    const response = await api.get(`/timeline/${username}`);

    console.log(response.data);
  }

  return (
    <Container>
      <UsernameInput
        onChange={e => setUsername(e.target.value)}
        placeholder='GitHub username'
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
  );
};

export default Inputs;
