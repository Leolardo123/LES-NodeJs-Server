const bcrypt = require('bcrypt');

class verificaSenha {
    constructor() {}

    async processar(data) {
        if(data.cli_senha) {
            if(data.cli_senha.length >= 8) {
                let salt = bcrypt.genSaltSync(10);
                data.cli_senha = await bcrypt.hash(data.cli_senha, salt);
                data.cli_ativo = true;
                return null;
            }
            return 'Senha fraca';
        }
        return null;
    }
}

module.exports = verificaSenha;