const { db } = require('../conexao')

module.exports = {
    get    : () => {
        return db.execute.query('SELECT * FROM elivros.livros');
    },
    getOne : (id) => {
        return db.execute.query('SELECT * FROM elivros.livros WHERE  liv_id = '+id);
    },
    post : (cliente) => {
        db.execute.query('INSERT INTO livros VALUES ');
    }
}
