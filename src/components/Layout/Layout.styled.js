import styled from 'styled-components';

export const Header = styled.header`
  padding: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: #e1f5a9;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
export const BoxMain = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;
export const Footer = styled.footer`
  text-align: center;
  padding: 15px 3px;
  color: #212121;
  background-color: #e1f5a9;
  font-weight: 700;
  border-top: 1px solid #848484;
`;
export const LinkGit = styled.a`
  text-decoration: none;
  color: black;
  transition: color 250ms linear;
  &:hover {
    color: #fe642e;
  }
`;
