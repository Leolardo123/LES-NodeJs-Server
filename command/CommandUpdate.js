const Fachada = require("../fachada/fachada");

class CommandUpdate {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.update(data);
    }
}

module.exports = CommandUpdate;