class VerificaDataDeNascimento {
    constructor(){}

    processar(data) {

        if(data.cli_dtnascimento) {

            //Data invalida: 1614913200000, -2203534412000
            //Data valida: 883008000000
            let minMilli = 1000 * 60 * 60 * 24 * 365 * 15;  //473040000000
            let maxMilli = 1000 * 60 * 60 * 24 * 365 * 120; //3784320000000

            let currentDate = new Date().getTime();
            let myBirthDate = data.cli_dtnascimento;
    
            let validate = (currentDate - myBirthDate);
    
            if(validate >= minMilli && validate <= maxMilli) {
                return null
            } else {
                console.log('teste')
                return 'Data invalida';
            }
        }
        return null;
    }
}

module.exports = VerificaDataDeNascimento;