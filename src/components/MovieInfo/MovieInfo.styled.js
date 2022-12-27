import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  margin: 10px 10px;
  gap: 15px;
`;
export const Img = styled.img`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  width: 320px;
  border-radius: 5px;
`;
export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: #f7f8e0;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Title = styled.h1`
  font-size: 28px;
`;
export const Paragraph = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #fe642e;
`;
export const SubTitle = styled.h2``;
export const Ul = styled.ul`
  display: flex;
  gap: 20px;
`;
export const Li = styled.li``;
export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fe642e;
  font-size: 18px;
  font-weight: 700;
`;
