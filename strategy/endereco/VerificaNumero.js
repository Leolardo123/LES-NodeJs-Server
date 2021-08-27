class verificaNumero {
    constructor() {}

    processar(data) {

        if(data.end_numero) {
            if(!isNaN(data.end_numero) && ( (data.data.end_numero.length <= 4) && (data.data.end_numero.length >= 1) )) {
                return null;
            }
            return 'O Numero deve conter no maximo 4 casas';
        }
        return null;
    }
}

module.exports = verificaNumero;