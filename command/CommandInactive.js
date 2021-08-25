const Fachada = require("../fachada/fachada");

class CommandInactive {
    fachada;

    constructor() {
        this.fachada = new Fachada();
    }

    execute(data) {
        return this.fachada.inactive(data);
    }
}

module.exports = CommandInactive;