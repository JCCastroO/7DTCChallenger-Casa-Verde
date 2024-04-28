import styled from "styled-components";
import { Theme } from "../../config/theme";

interface TitleProps {
  type: string;
}

export const Text = styled.p`
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.text};
  font-weight: ${Theme.font.weight.regular};
  color: ${Theme.colors.font};
  margin: 0;
`;

export const Title = styled.h3<TitleProps>`
  font-family: ${Theme.font.family.titles};
  font-size: ${(TitleProps) =>
    TitleProps.type === "principal"
      ? Theme.font.size.title.primary
      : TitleProps.type === "principalCard"
      ? Theme.font.size.title.secondary
      : TitleProps.type === "card"
      ? Theme.font.size.title.terciary
      : "16px"};
  font-weight: ${Theme.font.weight.hard};
  color: ${Theme.colors.font};
  margin: 0;
`;
