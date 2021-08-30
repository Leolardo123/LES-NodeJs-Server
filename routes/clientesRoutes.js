const express = require('express');
const router = express.Router();

const validate = require('../config/auth');
const Controller = require('../controller/Controller');
let controller = new Controller();

//AS ROTAS LEVAM PARA O CONTROLLER QUE REALIZA AS REQUISIÇÕES DA API
router.post('/readAll', async function(req,res){
    controller.read(req,res);
})

router.post('/readId', validate, async function(req,res){
    controller.readId(req,res);
})

router.post('/readOne', validate, async function(req,res){
    controller.readOne(req,res);
})

router.post('/insert', async function(req,res){
    controller.insert(req,res);
})

router.put('/update',validate, async function(req,res){
    controller.update(req,res);
})

router.put('/updatePassword',validate, async function(req,res){
    controller.updatePassword(req,res);
})

router.put('/inactive',validate, async function(req,res){
    controller.inactive(req,res);
})

router.delete('/delete', async function(req,res){
    controller.delete(req,res);
})


module.exports = router