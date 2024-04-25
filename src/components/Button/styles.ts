import styled from "styled-components";
import { Theme } from "../../config/theme";

export const StyledButton = styled.button`
  width: 20em;
  height: 75px;
  background-color: ${Theme.colors.primary};
  border: none;
  color: ${Theme.colors.white};
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.regular};
  font-weight: ${Theme.font.weight.regular};
  cursor: pointer;
`;
