const db = require('../conexao')
const config = require('config')

//AQUI CONTEM TODAS AS FUNCÕES QUE FAZEM CONEXOES COM O BD
module.exports = {
    auth : (email) => {
        return db.execute.query("SELECT cli_id, cli_pnome, cli_senha FROM "+db.schema+".clientes WHERE cli_email= $1", [email]);
    },
    read : () => {
        return db.execute.query("SELECT * FROM "+db.schema+".clientes");
    },
    readId : (query) => {
        return db.execute.query("SELECT * FROM "+db.schema+".clientes WHERE cli_id = "+query.id);
    },
    insert : (query) => {
        return db.execute.query("INSERT INTO "
            +db.schema+".clientes(cli_pnome, cli_unome, cli_rg, cli_cpf, cli_email, cli_telefone, cli_senha, cli_ativo)"
            +" VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [query.cli_pnome, query.cli_unome, query.cli_rg, query.cli_cpf, query.cli_email, query.cli_telefone, query.cli_senha, query.cli_ativo]);
    },
    update : (query) => {
        return db.execute.query("UPDATE "+db.schema+".clientes SET cli_pnome = $1, cli_unome = $2, cli_rg = $3, cli_cpf = $4, cli_email = $5, cli_telefone = $6, cli_senha = $7"
            + "WHERE cli_id = $8"
            , [query.cli_pnome, query.cli_unome, query.cli_rg, query.cli_cpf, query.cli_email, query.cli_telefone, query.cli_senha, query.id]);
    },
    inactive : (query) => {
        return db.execute.query("UPDATE "+db.schema+".clientes SET cli_ativo = false "
            + "WHERE cli_id = $1"
            , [query.id]);
    },
    delete : (query) => {
        return db.execute.query("DELETE FROM "+db.schema+".clientes WHERE cli_id = $1"
            , [query.id]);
    }
}