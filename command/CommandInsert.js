const Fachada = require("../fachada/fachada");

class CommandInsert {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.insert(data);
    }
}

module.exports = CommandInsert;