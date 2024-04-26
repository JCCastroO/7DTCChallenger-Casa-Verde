import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../../config/theme";

export const Container = styled.header`
  position: absolute;
  left: 15em;
  right: 15em;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  z-index: +1;
`;

export const Logo = styled.img`
  width: 177px;
  height: 44.84px;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.regular};
  font-weight: ${Theme.font.weight.regular};
  color: ${Theme.colors.font};
  cursor: pointer;
`;
