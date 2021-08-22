const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const clientesData = require('../database/DAO/DAOClientes')
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
    readID : async (req,res) => {
        const returnData = await clientesData.getOne(req.body.id);
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

        

        let teste = sqlBuild.objToSql(cliente)

        const returnData = await clientesData.post(teste);

        // if(!returnData||returnData.length==0) {
        //     console.log('post: Error on Insert')
        //     res.json({errMsg:'Data not found'});
        // }else{
        //     console.log('post',returnData)
        //     res.json(returnData);
        // }
    },
    remove: async (req,res) => {
        
    }
}