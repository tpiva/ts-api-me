require('custom-env').env();

const {
    NODE_ENV,
    DB_NAME,
    DB_DIALECT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    HOST,
    SERVER_PORT,
    DB_PORT,
    AUTH_SECRET
} = process.env;

module.exports = {
    enviroment: NODE_ENV,
    database: DB_NAME,
    dialect: DB_DIALECT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dbHost: DB_HOST,
    host: HOST,
    serverPort: SERVER_PORT,
    pgPort: DB_PORT,
    secret: AUTH_SECRET, 
    dbURL: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}` //postgres://postgres:postgres@localhost:5432/ts_api_test
}