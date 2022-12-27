import styled from 'styled-components';
export const Form = styled.form`
  padding: 10px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  background-color: #f3e2a9;
  border: none;
  border-radius: 4px;
  height: 22px;
  padding: 3px 10px;
`;
export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: transparent;
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.3);
  }
`;
