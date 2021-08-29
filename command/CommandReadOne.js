const Fachada = require("../fachada/fachada");

class CommandReadId {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.readOne(data);
    }
}

module.exports = CommandReadId;