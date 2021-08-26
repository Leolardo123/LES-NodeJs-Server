const Fachada = require("../fachada/fachada");

class CommandInactive {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.inactive(data);
    }
}

module.exports = CommandInactive;