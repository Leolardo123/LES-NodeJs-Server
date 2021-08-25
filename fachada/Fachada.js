const DAOCartao = require("../database/DAO/DAOCartao");
const DAOCliente = require("../database/DAO/DAOCliente");
const DAOEndereco = require("../database/DAO/DAOEndereco");

class Fachada {
    daos;

    constructor() {
        this.definirDaos();
    }

    definirDaos() {
        this.daos = new Map();
        this.daos.set('cliente', DAOCliente)
        this.daos.set('cartao', DAOCartao)
        this.daos.set('endereco', DAOEndereco)
    }

    async read(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.read();
        return result;
    }

    async readAll(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.readAll();
        return result;
    }

    async readId(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.readId(data);
        return result;
    }

    async insert(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.insert(data);
        return result;
    }

    async update(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.update(data);
        return result;
    }

    async updatePassword(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.updatePassword(data);
        return result;
    }

    async inactive(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.inactive(data);
        return result;
    }

    async delete(data) {
        let dao = this.daos.get(data.type)
        let result = await dao.delete(data);
        return result;
    }
    
}

module.exports = Fachada;