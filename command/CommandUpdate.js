const Fachada = require("../fachada/fachada");

class CommandUpdate {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.update(data);
    }
}

module.exports = CommandUpdate;