const Fachada = require("../fachada/fachada");

class CommandRead {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.read(data);
    }
}

module.exports = CommandRead;