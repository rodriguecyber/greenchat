import dotenv from "dotenv";
dotenv.config();

const env = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI as string,
  CLOUD_NAME: process.env.CLOUD_NAME as string,
  CLOUD_API_KEY: process.env.CLOUD_API_KEY as string,
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET as string,
  EMAIL_USER: process.env.EMAIL_USER as string,
  EMAIL_PASSWORD: process.env.EMAIL_PASS as string,
  JWT_SECRET: process.env.JWT_SECRET_KEY as string, 
};

export default env;
