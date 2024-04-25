import styled from "styled-components";
import { Theme } from "../../config/theme";

export const Text = styled.p`
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.text};
  font-weight: ${Theme.font.weight.regular};
  color: ${Theme.colors.font};
  margin: 0;
`;

export const Title = styled.h3`
  font-family: ${Theme.font.family.titles};
  font-size: ${Theme.font.size.title.primary};
  font-weight: ${Theme.font.weight.hard};
  color: ${Theme.colors.font};
  margin: 0;
`;
