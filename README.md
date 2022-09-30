# Node JS / Express micro-service API

## I - Install dependancies
```sh
yarn
```

## II - Init environment variables
```sh
yarn init:env
```
> You can provide env variables like:
>
> - Application port: PORT=8080
> - Application env: NODE_ENV='development'
> - Database Url (optional): DATABASE_URL='mongodb://localhost:27017/test-db'
> - Set to true to use Mocks : IS_MOCK=true

## III - Start server
```sh
yarn start
```

## Middleware
To add some more **global** middleware, you'll have to update the file `./src/index.js`

## Healthz

| Type  | Uri      | Description       | Available           |
| ----- | -------- | ----------------- | ------------------- |
| [GET] | /healthz | Check the healthy | [x]                 |

## Login

| Type     | Uri          | Description         | Data source  | Available           |
| ------   | ------------ | ------------------- | ------------ | ------------------- |
| [POST]   | /auth/signin | Post signin request | n/a          | [x]                 |
| [POST]   | /auth/signup | Post signup request | n/a          | [ ]                 |

## Companies

| Type     | Uri          | Description         | Data source  | Available           |
| ------   | ------------ | ------------------- | ------------ | ------------------- |
| [GET]    | /companies   | Get all companies   | n/a          | [x]                 |
| [POST]   | /companies   | Record new company  | n/a          | [x]                |
