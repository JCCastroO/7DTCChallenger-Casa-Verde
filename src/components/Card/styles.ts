import styled from "styled-components";
import { Theme } from "../../config/theme";

interface ContainerProps {
  type: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${Theme.colors.white};
  width: ${(ContainerProps) =>
    ContainerProps.type === "principal"
      ? "800px"
      : ContainerProps.type === "offers"
      ? "auto"
      : "50px"};
  height: auto;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.img<ContainerProps>`
  width: ${(ContainerProps) =>
    ContainerProps.type === "principal"
      ? "440px"
      : ContainerProps.type === "offers"
      ? "220px"
      : "50px"};
  height: ${(ContainerProps) =>
    ContainerProps.type === "principal"
      ? "345px"
      : ContainerProps.type === "offers"
      ? "175px"
      : "50px"};
`;

export const TextContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${(ContainerProps) =>
    ContainerProps.type === "principal"
      ? "0"
      : ContainerProps.type === "offers"
      ? "12px"
      : "50px"};
  padding: ${(ContainerProps) =>
    ContainerProps.type === "principal"
      ? "0"
      : ContainerProps.type === "offers"
      ? "12px"
      : "50px"};
`;

export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Yellow = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: ${Theme.colors.primary};
`;

export const Text = styled.p`
  font-size: ${Theme.font.size.text};
  font-weight: ${Theme.font.weight.regular};
  font-family: ${Theme.font.family.primary};
  color: ${Theme.colors.font};
  text-align: left;
`;
