const moment = require('moment');

class VerificaValidade {
    constructor(){}

    processar(data) {

        if(data.car_validade) {

            //Data invalida: 
            //Data valida: 1648771200000

            let currentDate = new Date().getTime();
            let validadeMilli = new Date(data.car_validade).getTime();
    
            let validate = (validadeMilli - currentDate);
    
            if(validate >= 0) {
                return null
            } else {
                return 'Data invalida';
            }
        }
        return null;
    }
}

module.exports = VerificaValidade;