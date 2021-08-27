class verificaTelefone {
    constructor() {}

    processar(data) {

        if(data.cli_telefone) {
            if(!isNaN(data.cli_telefone) && data.cli_telefone.length == 8) {
                return null;
            }
            return 'O telefone deve conter 8 numeros';
        }
        return null;
    }
}

module.exports = verificaTelefone;