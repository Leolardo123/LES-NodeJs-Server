const Fachada = require("../fachada/fachada");

class CommandReadId {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.readId(data);
    }
}

module.exports = CommandReadId;