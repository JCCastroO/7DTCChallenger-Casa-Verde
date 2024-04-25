import React from "react";
import * as S from "./styles";

interface ItemProps {
  children: React.ReactNode;
  onClick?: () => any;
}

export default function Button({ children, onClick }: ItemProps) {
  return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
}
