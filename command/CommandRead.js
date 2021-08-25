const Fachada = require("../fachada/fachada");

class CommandRead {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.read(data);
    }
}

module.exports = CommandRead;