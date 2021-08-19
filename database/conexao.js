const pgp    = require('pg-promise')();
const config = require('config');

const db = pgp({
    user:       config.get("pgdatabase.user"),
    password:   config.get("pgdatabase.pass"),
    host:       config.get("pgdatabase.host"),
    port:       config.get("pgdatabase.port"),
    database:   config.get("pgdatabase.dbname")
})