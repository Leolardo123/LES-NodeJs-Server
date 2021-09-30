const express = require('express');
const router = express.Router();

const Controller = require('../controller/Controller');
let controller = new Controller();

//AS ROTAS LEVAM PARA O CONTROLLER QUE REALIZA AS REQUISIÇÕES DA API
router.post('/calcular', async function(req,res){
    controller.calcularFrete(req,res);
})

module.exports = router