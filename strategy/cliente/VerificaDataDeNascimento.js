class VerificaDataDeNascimento {
    constructor(){}

    processar(data) {

        if(data.cli_dtnascimento) {

            //invalida 1900-12-24T22:00:00-02:00
            //valida 1997-12-24T22:00:00-02:00
            let minMilli = 1000 * 60 * 60 * 24 * 365 * 15;  //473040000000
            let maxMilli = 1000 * 60 * 60 * 24 * 365 * 120; //3784320000000

            let currentDate = new Date().getTime();
            let myBirthDate = new Date(data.cli_dtnascimento).getTime();
    
            let validate = (currentDate - myBirthDate);
    
            if(validate >= minMilli && validate <= maxMilli) {
                return null
            } else {
                return 'Data invalida';
            }
        }
        return null;
    }
}

module.exports = VerificaDataDeNascimento;