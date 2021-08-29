const db = require('../conexao')

class DAOCartao {
    constructor(){}

    async readAll() {
        return await db.execute.query("SELECT * FROM "+db.schema+".cartoes");
    }

    async read (query) {
        return await db.execute.query("SELECT * FROM "+db.schema+".cartoes WHERE car_cli_id = $1", [query.id]);
    }

    async readId (query) {
        return await db.execute.query("SELECT * FROM "+db.schema+".cartoes WHERE car_cli_id = $1 and car_id = $2",[query.id, query.car_id]);
    }

    async insert (query) {
        return await db.execute.query("INSERT INTO "
            +db.schema+".cartoes(car_cli_id, car_numero, car_bandeira, car_nome, car_validade)"
            +" VALUES ($1,$2,$3,$4,$5)", [query.id, query.car_numero, query.car_bandeira, query.car_nome, query.car_validade]);
    }

    async update (query) {
        return await db.execute.query("UPDATE "+db.schema+".cartoes SET car_numero = $1, car_bandeira = $2, car_nome = $3, car_validade = $4"
            + "WHERE car_id = $5"
            , [query.car_numero, query.car_bandeira, query.car_nome, query.car_validade, query.car_id]);
    }

    async delete (query) {
        return await db.execute.query("DELETE FROM "+db.schema+".cartoes WHERE car_id = $1"
            , [query.car_id]);
    }


}

module.exports = DAOCartao;