import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootState } from "../../../store/store";
import Card from "../../../components/Card";
import { useEffect } from "react";

export default function Offers() {
  const { data, error } = useSelector((state: RootState) => state.plants);

  useEffect(() => {
    if (error.hasError) console.log(error);
  }, [error]);

  return (
    <S.Container>
      {data.map((item, index) => {
        return (
          item.ordem !== 0 && <Card type="offers" item={item} key={index} />
        );
      })}
    </S.Container>
  );
}
