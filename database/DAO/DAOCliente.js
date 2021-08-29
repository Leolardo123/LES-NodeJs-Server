const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript');
const db = require('../conexao');
const DAOEndereco = require('./DAOEndereco');

class DAOCliente {
    constructor() { }

    async auth(query) {
        return await db.execute.query("SELECT cli_id, cli_pnome, cli_senha FROM " + db.schema + ".clientes WHERE cli_email= $1", [query.cli_email]);
    }

    async read() {
        return await db.execute.query("SELECT * FROM " + db.schema + ".clientes");
    }

    async readId(query) {
        return await db.execute.query("SELECT * FROM " + db.schema + ".clientes WHERE cli_id = " + query.id);
    }

    async insert(query) {
        console.log(query)
        let DAOend = new DAOEndereco();
        let resultSet = await db.execute.query("INSERT INTO "
            + db.schema + ".clientes(cli_pnome, cli_unome, cli_rg, cli_cpf, cli_email, cli_telefone, cli_senha, cli_ativo, cli_sexo, cli_dtnascimento, cli_ddd)"
            + " VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING cli_id",
            [
                query.cli_pnome,
                query.cli_unome,
                query.cli_rg,
                query.cli_cpf,
                query.cli_email,
                query.cli_telefone,
                query.cli_senha,
                true,
                query.cli_sexo,
                query.cli_dtnascimento,
                query.cli_ddd
            ]);

        try{
            query.enderecos.forEach(endereco => {
                endereco.cli_id = resultSet[0].cli_id;
                DAOend.insert(endereco);
            });
        }catch(err){
            console.log(err);
            return err;
        }

        return resultSet
    }

    async update(query) {
        return await db.execute.query("UPDATE " + db.schema + ".clientes "
            + "SET cli_pnome = $1, cli_unome = $2, cli_rg = $3, "
            + "cli_cpf = $4, cli_email = $5, cli_telefone = $6, "
            + "cli_senha = $7, cli_sexo = $8, cli_dtnascimento = $9, cli_ddd = $10"
            + "WHERE cli_id = $11",
            [
                query.cli_pnome,
                query.cli_unome,
                query.cli_rg,
                query.cli_cpf,
                query.cli_email,
                query.cli_telefone,
                query.cli_senha,
                query.cli_sexo,
                query.cli_dtnascimento,
                query.cli_ddd,
                query.id
            ]);

    }

    async updatePassword(query) {
        return await db.execute.query("UPDATE " + db.schema + ".clientes SET cli_senha = $1 WHERE cli_id = $2", [query.cli_senha, query.id]);
    }

    async inactive(query) {
        return await db.execute.query("UPDATE " + db.schema + ".clientes SET cli_ativo = false "
            + "WHERE cli_id = $1"
            , [query.id]);
    }

    async delete(query) {
        return await db.execute.query("DELETE FROM " + db.schema + ".clientes WHERE cli_id = $1"
            , [query.id]);
    }
}

module.exports = DAOCliente;
