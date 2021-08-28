const VerificaValidade = require("./cartao/VerificaValidade");

class VerificaCartao {
    constructor(){}

    async processar(data) {
        let regra1 = new VerificaValidade();

        let string = '';

        if (await regra1.processar(data) != null) {
            string += regra1.processar(data)+' ';
        }


        if (string != '')
            return string;
        return null;

    }
}

module.exports = VerificaCartao;