const express = require('express');
const router = express.Router();
const controller = require("../controller/ClientesController");
const validate = require('../config/auth')

router.get('/', validate, async function(req,res){
    controller.get(req,res);
})

router.get('/:id', validate, async function(req,res){
    controller.getOne(req,res);
})

router.post('/', validate, async function(req,res){
    controller.post(req,res);
})

router.post('/read', validate, async function(req,res){
    controller.postOne(req,res);
})

router.put('/:id',async function(req,res){
    controller.get(req,res);
})

router.delete('/:id',async function(req,res){
    controller.get(req,res);
})


module.exports = router