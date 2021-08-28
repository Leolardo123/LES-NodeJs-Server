class verificaDDD {
    constructor() {}

    processar(data) {

        if(data.cli_ddd) {
            if(!isNaN(data.cli_ddd) && data.cli_ddd.length <= 3 ) {
                return null;
            }
            return 'O DDD deve conter no maximo 3 numeros ';
        }
        return null;
    }
}

module.exports = verificaDDD;