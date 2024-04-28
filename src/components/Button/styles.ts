import styled from "styled-components";
import { Theme } from "../../config/theme";

interface ButtonProps {
  type?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: 20em;
  height: 75px;
  background-color: ${(ButtonProps) =>
    ButtonProps.type === "submit" ? Theme.colors.primary : Theme.colors.white};
  border: none;
  color: ${(ButtonProps) =>
    ButtonProps.type === "submit" ? Theme.colors.white : Theme.colors.primary};
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.regular};
  font-weight: ${Theme.font.weight.regular};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: ${(ButtonProps) =>
    ButtonProps.type === "submit" ? "center" : "left"};
`;
