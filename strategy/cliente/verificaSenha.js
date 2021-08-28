const bcrypt = require('bcrypt');

class verificaSenha {
    constructor() {}

    async processar(data) {
        let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)

        if(data.cli_senha) {
            if(regex.test(data.cli_senha)) {
                let salt = bcrypt.genSaltSync(10);
                data.cli_senha = await bcrypt.hash(data.cli_senha, salt);
                return null;
            }
            return 'Senha fraca';
        }
        return null;
    }
}

module.exports = verificaSenha;