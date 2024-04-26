import React from "react";
import * as S from "./styles";

interface ItemProps {
  children: React.ReactNode;
  onClick?: () => any;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ children, onClick, type }: ItemProps) {
  return (
    <S.StyledButton onClick={onClick} type={type}>
      {children}
    </S.StyledButton>
  );
}
