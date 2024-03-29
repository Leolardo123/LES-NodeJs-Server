const db = require('../conexao')

class DAOEndereco {
    constructor() {}

    async read() {
        return await db.execute.query("SELECT * FROM "+db.schema+".enderecos");
    }

    async readId(query) {
        return await db.execute.query("SELECT * FROM "+db.schema+".enderecos WHERE end_cli_id = $1", [query.id]);
    }

    async readOne(query) {
        return await db.execute.query("SELECT * FROM "+db.schema+".enderecos WHERE end_id = $1", [query.end_id]);
    }

    async insert(query) {
        return await db.execute.query("INSERT INTO "
            +db.schema+".enderecos(end_cli_id, end_tresidencia, end_tlogradouro, end_nome, end_tipo, end_cep, end_numero, end_logradouro, end_complemento, end_bairro, end_cidade, end_estado, end_pais, end_observacao)"
            +" VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)", [
                query.cli_id,
                query.end_tresidencia,
                query.end_tlogradouro, 
                query.end_nome, 
                query.end_tipo, 
                query.end_cep, 
                query.end_numero, 
                query.end_logradouro, 
                query.end_complemento,
                query.end_bairro, 
                query.end_cidade, 
                query.end_estado, 
                query.end_pais, 
                query.end_observacao 
            ]);
    }

    async update(query) {
        return await db.execute.query("UPDATE "+db.schema+".enderecos SET end_tresidencia = $1, end_tlogradouro = $2, "
            + "end_nome = $3, end_tipo = $4, end_cep = $5, end_numero = $6, end_logradouro = $7, end_complemento = $8, end_bairro = $9, "
            + "end_cidade = $10, end_estado = $11, end_pais = $12, end_observacao = $13 "
            + "WHERE end_id = $14", [
                query.end_tresidencia,
                query.end_tlogradouro, 
                query.end_nome, 
                query.end_tipo, 
                query.end_cep, 
                query.end_numero, 
                query.end_logradouro, 
                query.end_complemento,
                query.end_bairro, 
                query.end_cidade, 
                query.end_estado, 
                query.end_pais, 
                query.end_observacao,
                query.end_id
            ]);
    }

    async delete(query) {
        return await db.execute.query("DELETE FROM "+db.schema+".enderecos WHERE end_id = $1"
            , [query.end_id]);
    }

}

module.exports = DAOEndereco;
