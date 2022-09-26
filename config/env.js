import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL;
const IS_MOCK = process.env.IS_MOCK === "true";
const JWT_SECRET = Buffer.from(process.env.JWT_SECRET, "base64");

export {
  NODE_ENV,
  JWT_SECRET,
  PORT ,
  DATABASE_URL,
  IS_MOCK,
}
