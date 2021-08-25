const Fachada = require("../fachada/fachada");

class CommandUpdatePassword {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.updatePassword(data);
    }
}

module.exports = CommandUpdatePassword;