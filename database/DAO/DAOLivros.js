const db = require('../conexao')

module.exports = {
    get    : () => {
        return db.query('SELECT * FROM elivros.livros');
    },
    getOne : (id) => {
        return db.query('SELECT * FROM elivros.livros WHERE  liv_id = '+id);
    },
    insert : (cliente) => {
        db.query('INSERT INTO livros VALUES ');
    }
}
