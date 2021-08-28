const Fachada = require("../fachada/fachada");

class CommandAuth {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.auth(data);
    }
}

module.exports = CommandAuth;