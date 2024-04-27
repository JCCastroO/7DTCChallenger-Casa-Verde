import { useForm } from "react-hook-form";
import validator from "validator";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import * as S from "./styles";
import keys from "../../../config/keys";
import emailjs from "@emailjs/browser";

interface FormProps {
  email: string;
}

export default function Presentation() {
  const { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } = keys();
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

    const templateParams = {
      from_name: "Casa Verde",
      email: "casaverde@email.com",
      to_email: data.email,
      to_name: data.email.split("@")[0],
      message: `Olá, ${data.email.split("@")[0]}.

      Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
      
      Até logo!`,
    };

    console.log(templateParams);

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, {
        publicKey: EMAIL_PUBLIC_KEY,
      })
      .then((response: any) => {
        console.log("SUCESS!", response.status, response.text);
      })
      .catch((error: any) => {
        console.log("FAILED...", error);
      });

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
