import styled from 'styled-components';

export const Header = styled.header`
  padding: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const Footer = styled.footer`
  text-align: center;
  padding: 15px 3px;
  color: #212121;
  font-weight: 700;
`;
export const LinkGit = styled.a`
  text-decoration: none;
  color: black;
  transition: color 250ms linear;
  &:hover {
    color: #fe642e;
  }
`;
