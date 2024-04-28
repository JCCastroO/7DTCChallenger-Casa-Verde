import keys from "../config/keys";
import emailjs from "@emailjs/browser";

interface TemplateParams extends Record<string, unknown> {
  from_name: string;
  email: string;
  to_email: string;
  to_name: string;
  message: string;
}

export const sendEmail = (templateParams: TemplateParams) => {
  const { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } = keys();

  return emailjs
    .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, {
      publicKey: EMAIL_PUBLIC_KEY,
    })
    .then((response: any) => {
      console.log("SUCESS!", response.status, response.text);
    })
    .catch((error: any) => {
      console.log("FAILED...", error);
    });
};
