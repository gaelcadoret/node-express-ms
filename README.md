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
> - Database Url (optional): DATABASE_URL='mongodb://localhost:27017/k8s-boilerplate?authSource=admin'
> - Set to true to use Mocks : IS_MOCK=true

## III - Edit .env file
```sh
APP_PORT=
DATABASE_URL=
IS_MOCK=
```

## Start server
```sh
yarn start
```
