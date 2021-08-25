const Fachada = require("../fachada/fachada");

class CommandReadAll {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.readAll(data);
    }
}

module.exports = CommandReadAll;