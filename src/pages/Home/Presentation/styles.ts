import styled from "styled-components";
import { Theme } from "../../../config/theme";

export const Container = styled.section`
  margin-top: 210px;
  width: 28em;
`;

export const SubTitle = styled.p`
  width: 70%;
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.regular};
  font-weight: ${Theme.font.weight.regular};
  color: ${Theme.colors.font};
`;

export const InputContainer = styled.form`
  width: 100%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-wrap: nowrap;
`;

export const Input = styled.input`
  width: 50em;
  height: 74px;
  border: none;
  outline: none;
  padding-left: 10px;
`;
