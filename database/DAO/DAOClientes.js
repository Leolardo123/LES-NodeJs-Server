const db = require('../conexao')

module.exports = {
    get    : () => {
        return db.query('SELECT * FROM elivros.clientes');
    },
    getOne : (id) => {
        return db.query('SELECT * FROM elivros.clientes WHERE cli_id = '+id);
    },
    insert : (cliente) => {
        db.query('INSERT INTO clientes VALUES ');
    }
}

// exports.getClientes = function () {
//     return db.query('SELECT * FROM elivros.clientes')
// }

