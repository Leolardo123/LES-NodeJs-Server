class verificaRG {
    constructor() {}

    processar(data) {

        if(!isNaN(data.cli_rg) && data.cli_rg) {
            if(data.cli_rg.length == 10) {
                return null;
            }
            return 'RG deve conter 10 numeros';
        }
        return null;
    }
}

module.exports = verificaRG;