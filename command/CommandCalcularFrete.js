const Fachada = require("../fachada/fachada");

class CommandFrete {
constructor() {
        this._fachada = new Fachada();
    }

    execute(data) {
        return this._fachada.calcularFrete(data);
    }
}

module.exports = CommandFrete;