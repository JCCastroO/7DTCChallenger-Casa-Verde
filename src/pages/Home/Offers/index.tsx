import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootState } from "../../../store/store";
import Card from "../../../components/Card";
import { useEffect } from "react";

export default function Offers() {
  const { data, error } = useSelector((state: RootState) => state.plants);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <S.Container>
      {data.map((item, index) => {
        return <Card type="offers" item={item} key={index} />;
      })}
    </S.Container>
  );
}
