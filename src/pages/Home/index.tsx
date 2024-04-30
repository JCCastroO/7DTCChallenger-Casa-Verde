import * as S from "./styles";
import plant from "../../assets/images/plant.png";
import Presentation from "./Presentation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSuccess, setError } from "../../store/plants/reducer";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Offers from "./Offers";
import { FaFilter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { Theme } from "../../config/theme";
import { useForm } from "react-hook-form";
import { PlantData } from "../../store/plants/types";

interface FormProps {
  min: number;
  max: number;
}

export default function Home() {
  const PLANT_API =
    "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsenc=p2ANqtz--6VX19s7tw5HQ-odB_03vW4_-fxO3sAFg69Ai1z6WEMpOyWNpVqRlpCyjRRUA3fKrDXtLR9LMubFVPA9bKT43e_3LKiI1g6CjRwR44klDeTKFWGqc&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation/";
  const { register, handleSubmit, reset } = useForm<FormProps>();
  const dispatch = useDispatch();
  const [modal, setModal] = useState<boolean>(false);
  const [order, setOrder] = useState<"grow" | "desc">("desc");
  const [filter, setFilter] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  useEffect(() => {
    axios
      .get(PLANT_API)
      .then((response) => {
        const data = response.data;
        let plants: PlantData[] = [] as PlantData[];

        if (filter.min >= 0 && filter.max > 0) {
          plants = data.filter(
            (plant: PlantData) =>
              plant.preco >= filter.min && plant.preco <= filter.max
          );
        } else {
          plants = data;
        }

        if (order === "desc") {
          plants.sort((a: PlantData, b: PlantData) => {
            return b.preco - a.preco;
          });
        } else if (order === "grow") {
          plants.sort((a: PlantData, b: PlantData) => {
            return a.preco - b.preco;
          });
        } else {
          return plants;
        }

        dispatch(setSuccess({ data: plants }));
      })
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
  }, [PLANT_API, dispatch, order, filter]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return handleSubmit(onFilter)();
  };

  const onFilter = (data: FormProps) => {
    if (data.min <= data.max) {
      setFilter({
        min: data.min,
        max: data.max,
      });
    }
    reset();
  };

  const handleOrder = (order: string) => {
    if (order === "desc") setOrder("desc");
    if (order === "grow") setOrder("grow");
  };

  return (
    <S.Container>
      <S.BackgroundImage src={plant} alt="Imagem de fundo" />
      <Presentation />
      <S.PrincipalContainer>
        <Card type="principal" />
      </S.PrincipalContainer>
      <S.CardTitle>
        <Title text="Conheça nossas" title="plantas" />
      </S.CardTitle>
      <S.CardFilter>
        <S.ModalFilter open={modal}>
          <S.Order
            order={order}
            onClick={() => handleOrder("grow")}
            orderType="grow"
          >
            <FaArrowUp
              color={
                order === "grow" ? Theme.colors.primary : Theme.colors.black
              }
            />
            Crescente
          </S.Order>
          <S.Order
            order={order}
            onClick={() => handleOrder("desc")}
            orderType="desc"
          >
            <FaArrowDown
              color={
                order === "desc" ? Theme.colors.primary : Theme.colors.black
              }
            />
            Decrescente
          </S.Order>
          <S.PriceFilter>
            <S.Label>Preço</S.Label>
            <S.FilterForm onSubmit={(e) => onSubmit(e)}>
              <S.FilterInput
                placeholder="Preço minimo"
                type="number"
                step="0.1"
                min={0}
                {...register("min")}
              />
              <S.FilterInput
                placeholder="Preço máximo"
                type="number"
                step="0.1"
                min={0}
                {...register("max")}
              />
              <S.ButtonInput type="submit">
                <FaDollarSign />
              </S.ButtonInput>
            </S.FilterForm>
          </S.PriceFilter>
        </S.ModalFilter>
        <FaFilter
          size={25}
          onClick={() => setModal(!modal)}
          style={{ cursor: "pointer" }}
        />
      </S.CardFilter>
      <Offers />
    </S.Container>
  );
}
