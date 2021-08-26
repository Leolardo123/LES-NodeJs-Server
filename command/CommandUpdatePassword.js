const Fachada = require("../fachada/fachada");

class CommandUpdatePassword {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.updatePassword(data);
    }
}

module.exports = CommandUpdatePassword;