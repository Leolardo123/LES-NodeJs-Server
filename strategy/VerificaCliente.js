const verificaCPF = require("./cliente/VerificaCPF")
const VerificaDataDeNascimento = require("./cliente/verificaDataDeNascimento");
const verificaDDD = require("./cliente/VerificaDDD");
const verificaRG = require("./cliente/VerificaRG");
const VerificaSenha = require("./cliente/verificaSenha");
const verificaTelefone = require("./cliente/VerificaTelefone");

class VerificaCliente {
    constructor(){}

    async processar(data) {
        let regra1 = new VerificaSenha();
        let regra2 = new VerificaDataDeNascimento();
        let regra3 = new verificaCPF();
        let regra4 = new verificaRG();
        let regra5 = new verificaDDD();
        let regra6 = new verificaTelefone();

        let string = '';

        if (await regra1.processar(data) != null) {
            string += await regra1.processar(data)+' ';
        }
        if (regra2.processar(data) != null) {
            string += regra2.processar(data);
        }
        if (regra3.processar(data) != null) {
            string += regra3.processar(data);
        }
        if (regra4.processar(data) != null) {
            string += regra4.processar(data);
        }
        if (regra5.processar(data) != null) {
            string += regra5.processar(data);
        }
        if (regra6.processar(data) != null) {
            string += regra6.processar(data);
        }

        console.log(string)

        if (string != '')
            return string;
        return null;

        

    }
}

module.exports = VerificaCliente;