import env from "react-dotenv";

export default function keys() {
  const EMAIL_SERVICE_ID = env.EMAIL_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = env.EMAIL_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = env.EMAIL_PUBLIC_KEY;
  const PLANT_API = env.PLANT_API;

  return {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY,
    PLANT_API,
  };
}
