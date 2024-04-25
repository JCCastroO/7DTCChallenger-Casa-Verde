import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import * as S from "./styles";
import yellowSplash from "./assets/images/yellowSplash.png";

export default function App() {
  return (
    <>
      <S.BackgroundImage src={yellowSplash} alt="Imagem de fundo" />
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
}
