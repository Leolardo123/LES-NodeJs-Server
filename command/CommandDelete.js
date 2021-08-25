const Fachada = require("../fachada/fachada");

class CommandDelete {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.delete(data);
    }
}

module.exports = CommandDelete;