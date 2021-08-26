const Fachada = require("../fachada/fachada");

class CommandDelete {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.delete(data);
    }
}

module.exports = CommandDelete;