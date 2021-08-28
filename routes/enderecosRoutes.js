const express = require('express');
const router = express.Router();

const validate = require('../config/auth')
const Controller = require('../controller/Controller');
let controller = new Controller();

//AS ROTAS LEVAM PARA O CONTROLLER QUE REALIZA AS REQUISIÇÕES DA API
router.post('/read', validate, async function(req,res){
    controller.read(req,res);
})

router.post('/readId', validate, async function(req,res){
    controller.readId(req,res);
})

router.post('/insert', validate, async function(req,res){
    controller.insert(req,res);
})


router.put('/update',async function(req,res){
    controller.update(req,res);
})

router.put('/inactive',async function(req,res){
    controller.inactive(req,res);
})

router.delete('/delete',async function(req,res){
    controller.delete(req,res);
})


module.exports = router