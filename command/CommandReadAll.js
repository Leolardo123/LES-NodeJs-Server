const Fachada = require("../fachada/fachada");

class CommandReadAll {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.readAll(data);
    }
}

module.exports = CommandReadAll;