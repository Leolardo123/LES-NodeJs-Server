const pgp    = require('pg-promise')();
const config = require('config');

const db = {
    execute : pgp({
                    user:       config.get("pgdatabase.user"),
                    password:   config.get("pgdatabase.pass"),
                    host:       config.get("pgdatabase.host"),
                    port:       config.get("pgdatabase.port"),
                    database:   config.get("pgdatabase.dbname")
                }),
    schema  : config.get("pgdatabase.schema")
}

module.exports = db


