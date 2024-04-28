import * as S from "./styles";

interface ItemProps {
  text: string;
  title: string;
  type?: "principal" | "principalCard" | "card";
}

export default function Title({ text, title, type = "principal" }: ItemProps) {
  return (
    <>
      {type !== "card" && <S.Text>{text}</S.Text>}
      <S.Title type={type}>{title}</S.Title>
      {type === "card" && <S.Text>{text}</S.Text>}
    </>
  );
}
