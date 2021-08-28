const verificaCEP = require("./endereco/VerificaCEP");
const verificaNumero = require("./endereco/VerificaNumero");

class VerificaEndereco {
    constructor(){}

    async processar(data) {
        let regra1 = new verificaNumero();
        let regra2 = new verificaCEP();

        let string = '';

        if (await regra1.processar(data) != null) {
            string += await regra1.processar(data)+' ';
        }
        if (regra2.processar(data) != null) {
            string += regra2.processar(data);
        }

        if (string != '')
            return string;
        return null;

    }
}

module.exports = VerificaEndereco;