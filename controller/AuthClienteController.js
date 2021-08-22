const bcrypt = require('bcrypt')
const dao = require('../database/DAO/DAOClientes')
const jwt = require('jsonwebtoken');

module.exports = {
    auth : async (req,res) => {
        const { email, senha } = req.body;
        const returnData = await dao.auth(email, senha);
        if(!returnData||returnData.length==0) {
            console.log('auth: Data not found')
            res.json({errMsg:'Data not found'});
        }else{
            console.log('auth',returnData[0])
            res.json({
                returnData: returnData[0],
                token: jwt.sign(returnData[0], 'PRIVATEKEY')
            });
        }
    }
}