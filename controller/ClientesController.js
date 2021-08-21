const bcrypt = require('bcrypt')
const clientesData = require('../database/DAO/DAOClientes')
const jwt = require('jsonwebtoken');
const sqlBuild = require('../services/sqlBuild')

module.exports = {
    get : async (req,res) => {
        const returnData = await clientesData.get();
        if(!returnData||returnData.length==0) {
            console.log('Data not found')
            res.json({errMsg:'get: Data not found'});
        }else{
            console.log('get',returnData)
            res.json(returnData);
        }
    },
    getOne : async (req,res) => {
        const returnData = await clientesData.getOne(req.params.id);
        if(!returnData||returnData.length==0) {
            console.log('getOne: Data not found')
            res.json({errMsg:'Data not found'});
        }else{
            console.log('getOne',returnData[0])
            res.json(returnData[0]);
        }
    },
    post: async (req,res) => {
        const passeHasheado = await bcrypt.hash('req.body.cli_senha', 10);

        console.log(req)

        let cliente = {
            "cli_pnome":    req.body.cli_pnome,
            "cli_unome":    req.body.cli_unome,
            "cli_rg":       req.body.cli_rg,
            "cli_cpf":      req.body.cli_cpf,
            "cli_email":    req.body.cli_email,
            "cli_telefone": req.body.cli_telefone,
            "cli_senha":    passeHasheado,
            "cli_ativo":    true
        }

        console.log(sqlBuild.objToSql(cliente))

        const returnData = await clientesData.post(cliente);

        if(!returnData||returnData.length==0) {
            console.log('post: Error on Insert')
            res.json({errMsg:'Data not found'});
        }else{
            console.log('post',returnData)
            res.json(returnData);
        }
    },
    remove: async (req,res) => {
        
    }
}
