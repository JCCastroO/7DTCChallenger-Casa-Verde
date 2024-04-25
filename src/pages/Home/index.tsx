import * as S from "./styles";
import plant from "../../assets/images/plant.png";
import Presentation from "./Presentation";

export default function Home() {
  return (
    <S.Container>
      <S.BackgroundImage src={plant} alt="Imagem de fundo" />
      <Presentation />
    </S.Container>
  );
}
