const db = require('../conexao')

class DAOLivro {
    constructor(){}

    async read() {
        return await db.execute.query("SELECT * FROM "+db.schema+".livros");
    }

    async readId (query) {
        return await db.execute.query("SELECT * FROM "+db.schema+".livros WHERE liv_id = $1", [query.liv_id]);
    }

    async readOne (query) {
        return await db.execute.query("SELECT * FROM "+db.schema+".livros WHERE "+query.key+" = "+query.value);
    }

    async insert (query) {
        try {
            
            return await db.execute.query("INSERT INTO "
                +db.schema+".livros(liv_valor, liv_nome, liv_autor, liv_categoria, liv_ano, liv_titulo, liv_editora, liv_edicao,"
                +" liv_isbn, liv_npaginas, liv_sinopse, liv_altura, liv_peso, liv_profundidade, liv_descricao, liv_estoque, liv_custo,"
                +" liv_mlucro, liv_preco, liv_cbarras, liv_ativo)"
                +" VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)", [
                    query.liv_valor,
                    query.liv_nome, 
                    query.liv_autor, 
                    query.liv_categoria, 
                    query.liv_ano, 
                    query.liv_titulo, 
                    query.liv_editora, 
                    query.liv_edicao,
                    query.liv_isbn, 
                    query.liv_npaginas, 
                    query.liv_sinopse, 
                    query.liv_altura, 
                    query.liv_peso, 
                    query.liv_profundidade, 
                    query.liv_descricao, 
                    query.liv_estoque, 
                    query.liv_custo, 
                    query.liv_mlucro, 
                    query.liv_preco, 
                    query.liv_cbarras, 
                    query.liv_ativo 
                ]);
        }catch (err) {
            console.log(err)
            return err;
        }
    }

    async update (query) {
        return await db.execute.query("UPDATE "+db.schema+".livros SET liv_valor = $1, liv_nome = $2, liv_autor = $3, liv_categoria = $4, " 
            + "liv_ano = $5, liv_titulo = $6, liv_editoria = $7, liv_edicao = $8, liv_isbn = $9, liv_npaginas = $10, liv_sinopse = $11, liv_altura = $12, liv_peso = $13, "
            + "liv_profundidade = $14, liv_descricao = $15, liv_estoque = $16, liv_custo = $17, liv_mlucro = $18, liv_preco = $19, liv_cbarras = $20, liv_ativo = $21 "
            + "WHERE liv_id = $22"
            , [
                query.liv_valor,
                query.liv_nome, 
                query.liv_autor, 
                query.liv_categoria, 
                query.liv_ano, 
                query.liv_titulo, 
                query.liv_editoria, 
                query.liv_edicao,
                query.liv_isbn, 
                query.liv_npaginas, 
                query.liv_sinopse, 
                query.liv_altura, 
                query.liv_peso, 
                query.liv_profundidade, 
                query.liv_descricao, 
                query.liv_estoque, 
                query.liv_custo,
                query.liv_mlucro, 
                query.liv_preco, 
                query.liv_cbarras, 
                query.liv_ativo,
                query.liv_id
            ]);
    }

    async delete (query) {
        return await db.execute.query("DELETE FROM "+db.schema+".livros WHERE liv_id = $1"
            , [query.liv_id]);
    }


}

module.exports = DAOLivro;