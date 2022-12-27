import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Title = styled.h2`
  text-align: center;
  padding: 10px 0;
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 10px 3px;
`;
export const Li = styled.li`
  width: 220px;
  border-radius: 5px;
  padding-bottom: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.03);
  }
  transition: transform 250ms linear;
`;
export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  color: #212121;
  font-size: 18px;
  font-weight: 700;
`;
export const Img = styled.img`
  width: 220px;
`;
export const Span = styled.span``;
