import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: stretch;
  justify-content: flex-start;
`;

export const UsernameInput = styled.input`
  background: var(--secondary);
  border-radius: 8px;
  border: 0;
  outline: 0;
  padding: 15px 10px;
  margin-left: 15px;

  &::placeholder {
    color: var(--white);
    font-size: 15px;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  margin-left: 1%;
  border-radius: 8px;
  background: var(--content);

  &:hover {
    opacity: 0.8;
  }
`;
