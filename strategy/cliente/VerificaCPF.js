class verificaCPF {
    constructor() {}

    processar(data) {

        if(data.cli_cpf) {
            if(!isNaN(data.cli_cpf) && data.cli_cpf.length == 11) {
                return null;
            }
            return 'CPF deve conter 11 numeros';
        }
        return null;
    }
}

module.exports = verificaCPF;