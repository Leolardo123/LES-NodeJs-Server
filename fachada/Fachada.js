const DAOCartao = require("../database/DAO/DAOCartao");
const DAOCliente = require("../database/DAO/DAOCliente");
const DAOEndereco = require("../database/DAO/DAOEndereco");

const VerificaCartao = require("../strategy/VerificaCartao");
const VerificaCliente = require("../strategy/VerificaCliente");
const VerificaEndereco = require("../strategy/VerificaEndereco");

class Fachada {
    constructor() {
        this.definirDaos();
        this.definirRegras();
    }

    definirDaos() {
        this._daos = new Map();
        this._daos.set('cliente', new DAOCliente())
        this._daos.set('cartao', new DAOCartao())
        this._daos.set('endereco', new DAOEndereco())
    }

    definirRegras() {
        this._regras = new Map();
        this._regras.set('cliente', new VerificaCliente())
        this._regras.set('cartao', new VerificaCartao())
        this._regras.set('endereco', new VerificaEndereco())
    }

    async executarRegras(data) {
        let regrasPorTipo = this._regras.get(data.type);
        return regrasPorTipo.processar(data);
    }

    async auth(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.auth(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async read(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.read(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async readAll(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.readAll();
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async readId(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.readId(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async readOne(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.readOne(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async insert(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.insert(data);
            return result;
        } else {
            return { errMsg: errMsg};
        }
    }

    async update(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.update(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async updatePassword(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.updatePassword(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async inactive(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.inactive(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }

    async delete(data) {
        let errMsg = await this.executarRegras(data)
        if(errMsg == null){
            let dao = this._daos.get(data.type)
            let result = await dao.delete(data);
            return result;
        } else {
            return { errMsg: errMsg}
        }
    }
    
}

module.exports = Fachada;