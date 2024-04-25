import Button from "../../../components/Button";
import Title from "../../../components/Title";
import * as S from "./styles";

export default function Presentation() {
  return (
    <S.Container>
      <Title text="Sua casa com as" title="melhores plantas" />
      <S.SubTitle>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </S.SubTitle>
      <S.InputContainer>
        <S.Input placeholder="Insira seu e-mail" />
        <Button onClick={() => {}}>Assinar newsletter</Button>
      </S.InputContainer>
    </S.Container>
  );
}
