const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const CommandInactive = require('../command/CommandInactive');
const CommandDelete = require('../command/CommandDelete');

const CommandInsert = require("../command/CommandInsert");
const CommandRead = require("../command/CommandRead");
const CommandReadId = require("../command/CommandReadId");
const CommandUpdate = require("../command/CommandUpdate");
const CommandUpdatePassword = require("../command/CommandUpdatePassword");
const CommandReadAll = require('../command/CommandReadAll');
const CommandAuth = require('../command/CommandAuth');

class Controller {
    constructor() {}

    async auth(req, res) {
        let command = new CommandAuth();
        const senha = req.body.cli_senha;
        let result = await command.execute(req.body)
        if ( result.errMsg || result.length == 0) {
            res.json({ errMsg: 'Data not found' });
        } else {
            let hash = await bcrypt.compare(senha, result[0]['cli_senha']);
            if (hash) {
                res.json({
                    result: result[0],
                    token: jwt.sign(result[0], 'PRIVATEKEY')
                });
            } else {
                res.json({ errMsg: 'Acesso Negado' });
            }
        }
    }

    async readAll(req, res) {
        console.log(req)
        let command = new CommandReadAll();
        let result = await command.execute(req.body)
        res.json(result); 
    }

    async read(req, res) {
        let command = new CommandRead();
        let result = await command.execute(req.body)
        res.json(result); 
    }

    async readId(req,res) {
        let command = new CommandReadId();
        let result = await command.execute(req.body)
        res.json(result);
    }

    async insert(req,res) {
        let command = new CommandInsert();
        let result = await command.execute(req.body)
        res.json(result);
    }

    async update(req,res) {
        let command = new CommandUpdate();
        let result = await command.execute(req.body)
        res.json(result);
    }

    async updatePassword(req,res) {
        let command = new CommandUpdatePassword();
        let result = await command.execute(req.body)
        res.json(result);
    }

    async inactive(req,res) {
        let command = new CommandInactive();
        let result = await command.execute(req.body)
        res.json(result);
    }

    async delete(req,res) {
        let command = new CommandDelete();
        let result = await command.execute(req.body)
        res.json(result);
    }
}

module.exports = Controller;
