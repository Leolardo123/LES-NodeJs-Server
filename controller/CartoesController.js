const bcrypt = require('bcrypt')

const dao = require('../database/DAO/DAOCartao')

//A CAMADA DE CONTROLE POR ENQUANTO ENVIA DIRETO PARA AS FUNCOES DE INSERÇÃO
module.exports = {
    readAll : async (req,res) => {
        const returnData = await dao.readAll();
        if(!returnData||returnData.length==0) {
            console.log('Data not found')
            res.json({errMsg:'Dados não encontrados!!!'});
        }else{
            console.log('readAll',returnData)
            res.json(returnData);
        }
    },
    read : async (req,res) => {
        const returnData = await dao.read(req.body);
        if(!returnData||returnData.length==0) {
            console.log('read: Data not found')
            res.json({errMsg:'Dados não encontrados!!!'});
        }else{
            console.log('read',returnData)
            res.json(returnData);
        }
    },
    readId : async (req,res) => {
        const returnData = await dao.readId(req.body);
        if(!returnData||returnData.length==0) {
            console.log('readId: Data not found')
            res.json({errMsg:'Dados não encontrados!!!'});
        }else{
            console.log('readId',returnData[0])
            res.json(returnData[0]);
        }
    },
    insert: async (req,res) => {
        req.body.car_validade = new Date(req.body.car_validade)
        const returnData = await dao.insert(req.body);

        if(!returnData) {
            console.log('insert: Error on Insert')
            res.json({errMsg:'Erro ao inserir'});
        }else{
            console.log('insert: insert data success')
            res.json({ msg: 'Cadastro efetuado com sucesso' });
        }
    },
    update: async (req,res) => {
        req.body.car_validade = new Date(req.body.car_validade)
        const returnData = await dao.update(req.body);

        if(!returnData) {
            console.log('update: Error on update')
            res.json({errMsg:'Erro ao atualizar'});
        }else{
            console.log('update: update data success')
            res.json({ msg: 'Cadastro atualizado com sucesso' });
        }
    },
    delete: async (req,res) => {
        const returnData = await dao.delete(req.body);

        if(!returnData) {
            console.log('delete: Error on delete')
            res.json({errMsg:'Erro ao deletar'});
        }else{
            console.log('delete: delete data success')
            res.json({ msg: 'Cadastro deletado com sucesso' });
        }
    }
}