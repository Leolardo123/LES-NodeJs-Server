const Fachada = require("../fachada/fachada");

class CommandInsert {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.insert(data);
    }
}

module.exports = CommandInsert;