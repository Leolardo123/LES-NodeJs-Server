const db = require('../conexao')

class DAOEndereco {
    constructor() {}

    read() {
        return db.execute.query("SELECT * FROM "+db.schema+".enderecos");
    }

    readId(id) {
        return db.execute.query("SELECT * FROM "+db.schema+".enderecos WHERE end_cli_id = "+id);
    }

    insert(query) {
        return db.execute.query("INSERT INTO "
            +db.schema+".enderecos(end_nome, end_cli_id, end_tipo, cli_cpf, cli_email, cli_telefone, cli_senha, cli_ativo)"
            +" VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [query.cli_pnome, query.cli_unome, query.cli_rg, query.cli_cpf, query.cli_email, query.cli_telefone, query.cli_senha, query.cli_ativo]);
    }

    update(query) {
        return db.execute.query("UPDATE "+db.schema+".enderecos SET cli_pnome = $1, cli_unome = $2, cli_rg = $3, cli_cpf = $4, cli_email = $5, cli_telefone = $6, cli_senha = $7"
            + "WHERE cli_id = $8"
            , [query.cli_pnome, query.cli_unome, query.cli_rg, query.cli_cpf, query.cli_email, query.cli_telefone, query.cli_senha, query.cli_id]);
    }

    inactive(query) {
        return db.execute.query("UPDATE "+db.schema+".enderecos SET cli_ativo = false "
            + "WHERE cli_id = $1"
            , [query.cli_id]);
    }

    delete(query) {
        return db.execute.query("DELETE FROM "+db.schema+".enderecos WHERE cli_id = $1"
            , [query.cli_id]);
    }

}

module.exports = DAOEndereco;
