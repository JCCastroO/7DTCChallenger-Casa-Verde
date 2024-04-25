import * as S from "./styles";

interface ItemProps {
  text: string;
  title: string;
}

export default function Title({ text, title }: ItemProps) {
  return (
    <>
      <S.Text>{text}</S.Text>
      <S.Title>{title}</S.Title>
    </>
  );
}
