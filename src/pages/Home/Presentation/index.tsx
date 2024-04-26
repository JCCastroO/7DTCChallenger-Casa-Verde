import { useForm } from "react-hook-form";
import validator from "validator";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import * as S from "./styles";

interface FormProps {
  email: string;
}

export default function Presentation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return handleSubmit(handleSend)();
  };

  const handleSend = (data: FormProps) => {
    alert(
      `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${data.email}`
    );
    reset();
  };

  return (
    <S.Container>
      <Title text="Sua casa com as" title="melhores plantas" />
      <S.SubTitle>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </S.SubTitle>
      <S.Input>
        <S.InputContainer onSubmit={(event) => onSubmit(event)}>
          <S.EmailInput
            placeholder="Insira seu e-mail"
            {...register("email", {
              validate: (value) => {
                return validator.isEmail(value);
              },
            })}
          />
          <Button type="submit">Assinar newsletter</Button>
        </S.InputContainer>
        {errors?.email?.type === "validate" && (
          <S.ErrorText>Email invalido</S.ErrorText>
        )}
      </S.Input>
    </S.Container>
  );
}
