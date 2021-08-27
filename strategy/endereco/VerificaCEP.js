class verificaCEP {
    constructor() {}

    processar(data) {

        if(data.end_cep) {
            if(!isNaN(data.end_cep) && data.end_cep.length == 8){
                return null;
            }
            return 'O CEP deve conter 8 numeros';
        }
        return null;
    }
}

module.exports = verificaCEP;