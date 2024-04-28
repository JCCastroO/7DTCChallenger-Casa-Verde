import * as S from "./styles";
import plant from "../../assets/images/plant.png";
import Presentation from "./Presentation";
import keys from "../../config/keys";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSuccess, setError } from "../../store/plants/reducer";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Offers from "./Offers";

export default function Home() {
  const { PLANT_API } = keys();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(PLANT_API)
      .then((response) => dispatch(setSuccess({ data: response.data })))
      .catch((error) =>
        dispatch(
          setError({
            error: {
              hasError: true,
              name: error.name,
              status: error.request.status,
              message: error.message,
            },
          })
        )
      );
  }, [PLANT_API, dispatch]);

  return (
    <S.Container>
      <S.BackgroundImage src={plant} alt="Imagem de fundo" />
      <Presentation />
      <S.PrincipalContainer>
        <Card type="principal" />
      </S.PrincipalContainer>
      <S.CardTitle>
        <Title text="Conheça nossas" title="ofertas" />
      </S.CardTitle>
      <Offers />
    </S.Container>
  );
}
