const bcrypt = require('bcrypt');
const CommandInactive = require('../command/CommandInactive');
const CommandDelete = require('../command/CommandDelete');

const CommandInsert = require("../command/CommandInsert");
const CommandRead = require("../command/CommandRead");
const CommandReadId = require("../command/CommandReadId");
const CommandUpdate = require("../command/CommandUpdate");
const CommandUpdatePassword = require("../command/CommandUpdatePassword");
const CommandReadAll = require('../command/CommandReadAll');

module.exports = {
    readAll: async (req, res) => {
        let command = new CommandReadAll();
        let result = await command.execute(req.body)
        res.json(result); 
    },
    read: async (req, res) => {
        let command = new CommandRead();
        let result = await command.execute(req.body)
        res.json(result); 
    },
    readId : async (req,res) => {
        let command = new CommandReadId();
        let result = await command.execute(req.body)
        res.json(result);
    },
    insert: async (req,res) => {
        if(req.body.type === "cliente") {
            let salt = bcrypt.genSaltSync(10);
            req.body.cli_senha = await bcrypt.hash(req.body.cli_senha, salt);
            req.body.cli_ativo = true;
        }

        let command = new CommandInsert();
        let result = await command.execute(req.body)
        res.json(result);
    },
    update: async (req,res) => {
        if(req.body.type === "cliente") {
            let salt = bcrypt.genSaltSync(10);
            req.body.cli_senha = await bcrypt.hash(req.body.cli_senha, salt);
        }

        let command = new CommandUpdate();
        let result = await command.execute(req.body)
        res.json(result);
    },
    updatePassword: async (req,res) => {
        if(req.body.type === "cliente") {
            let salt = bcrypt.genSaltSync(10);
            req.body.cli_senha = await bcrypt.hash(req.body.cli_senha, salt);
        }

        let command = new CommandUpdatePassword();
        let result = await command.execute(req.body)
        res.json(result);
    },
    inactive: async (req,res) => {
        let command = new CommandInactive();
        let result = await command.execute(req.body)
        res.json(result);
    },
    delete: async (req,res) => {
        let command = new CommandDelete();
        let result = await command.execute(req.body)
        res.json(result);
    }
}