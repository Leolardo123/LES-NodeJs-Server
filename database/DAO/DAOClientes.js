const db = require('../conexao')
const config = require('config')

module.exports = {
    authPostOne : (email, senha) => {
        return db.execute.query("SELECT cli_id FROM "+db.schema+".clientes WHERE cli_email='"+email+"' and cli_senha='"+senha+"'");
    },
    get    : () => {
        return db.execute.query("SELECT * FROM "+db.schema+".clientes");
    },
    getOne : (id) => {
        return db.execute.query("SELECT * FROM "+db.schema+".clientes WHERE cli_id = "+id);
    },
    post : (queryString) => {
        db.execute.query("INSERT INTO "+db.schema+".clientes VALUES ('"+queryString+"')");
    }
}