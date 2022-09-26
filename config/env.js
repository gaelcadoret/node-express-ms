import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.APPLICATION_PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL;
const IS_MOCK = process.env.IS_MOCK === "true";

export {
  NODE_ENV,
  PORT ,
  DATABASE_URL,
  IS_MOCK,
}
