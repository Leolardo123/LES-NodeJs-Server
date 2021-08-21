const bcrypt = require('bcrypt')
const clientesData = require('../database/DAO/DAOClientes')
const jwt = require('jsonwebtoken');
const sqlBuild = require('../services/sqlBuild')

module.exports = {
    postOne : async (req,res) => {
        const { email, senha } = req.body;
        const returnData = await clientesData.authPostOne(email, senha);
        if(!returnData||returnData.length==0) {
            console.log('getOne: Data not found')
            res.json({errMsg:'Data not found'});
        }else{
            console.log('getOne',returnData[0])
            res.json({
                returnData: returnData[0],
                token: jwt.sign(returnData[0], 'PRIVATEKEY')
            });
        }
    }
}