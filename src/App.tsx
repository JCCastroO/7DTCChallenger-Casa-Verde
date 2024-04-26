import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import * as S from "./styles";

export default function App() {
  return (
    <>
      <S.BackgroundImage />
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
}
