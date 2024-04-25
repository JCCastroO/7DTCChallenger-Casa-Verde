import * as S from "./styles";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <S.Container>
      <S.Logo src={logo} alt="Logo Casa Verde" />
      <S.NavBar>
        <S.NavLink to={"/"}>Como fazer</S.NavLink>
        <p>/</p>
        <S.NavLink to={"/"}>Ofertas</S.NavLink>
        <p>/</p>
        <S.NavLink to={"/"}>Depoimentos</S.NavLink>
        <p>/</p>
        <S.NavLink to={"/"}>Vídeos</S.NavLink>
        <p>/</p>
        <S.NavLink to={"/"}>Meu carrinho</S.NavLink>
      </S.NavBar>
    </S.Container>
  );
}
