import { PlantData } from "../../store/plants/types";
import Button from "../Button";
import Title from "../Title";
import * as S from "./styles";
import principalCard from "../../assets/images/principalCard.png";
import { FaArrowRight } from "react-icons/fa";

interface ItemProps {
  type: "offers" | "principal";
  item?: PlantData;
}

export default function Card({ type, item }: ItemProps) {
  const renderCard = () => {
    if (type === "principal") {
      return (
        <>
          <S.Image type={type} src={principalCard} alt="Plant" />
          <S.TextContainer type="principal">
            <Title
              text="Como conseguir"
              title="minha planta"
              type="principalCard"
            />
            <S.SubTitle>
              <S.Yellow />
              <S.Text>Escolha suas plantas</S.Text>
            </S.SubTitle>
            <S.SubTitle>
              <S.Yellow />
              <S.Text>Faça seu pedido</S.Text>
            </S.SubTitle>
            <S.SubTitle>
              <S.Yellow />
              <S.Text>Aguarde na sua casa</S.Text>
            </S.SubTitle>
          </S.TextContainer>
        </>
      );
    }
    if (type === "offers") {
      return (
        <>
          <S.Image
            type={type}
            src={require(`../../assets/images/${item!.img}.png`)}
            alt={item!.name}
          />
          <S.TextContainer type="offers">
            <Title
              text={String(
                item!.preco.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              )}
              title={item!.name}
              type="card"
            />
            <Button>
              Comprar <FaArrowRight />
            </Button>
          </S.TextContainer>
        </>
      );
    }
  };

  return <S.Container type={type}>{renderCard()}</S.Container>;
}
