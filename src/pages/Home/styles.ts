import styled from "styled-components";
import { Theme } from "../../config/theme";

interface ModalProps {
  open?: boolean;
  order?: "grow" | "desc";
  orderType?: "grow" | "desc";
}

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 32em;
  height: 48em;
  right: 36px;
  z-index: -1;
`;

export const PrincipalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 110px;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 55px;
`;

export const CardFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 55px;
  height: 50px;
`;

export const ModalFilter = styled.div<ModalProps>`
  border: none;
  display: ${(ModalProps) => (ModalProps.open ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 15px;
  width: 100%;
`;

export const Order = styled.p<ModalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.regular};
  font-weight: ${(ModalProps) =>
    ModalProps.order === ModalProps.orderType
      ? Theme.font.weight.bold
      : Theme.font.weight.regular};
  color: ${Theme.colors.font};
  text-align: center;
  cursor: pointer;
`;

export const PriceFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: ${Theme.font.family.primary};
  font-size: ${Theme.font.size.regular};
  font-weight: ${Theme.font.weight.regular};
  color: ${Theme.colors.font};
`;

export const FilterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FilterInput = styled.input`
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  width: 100px;
  height: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
`;

export const ButtonInput = styled.button`
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  background-color: ${Theme.colors.primary};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
