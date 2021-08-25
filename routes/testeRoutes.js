const express = require('express');
const router = express.Router();

const controller = require('../controller/TesteController');

router.post('/read',async function(req,res){
    controller.read(req,res);
})

router.post('/readAll',async function(req,res){
    controller.readAll(req,res);
})

router.post('/readId',async function(req,res){
    controller.readId(req,res);
})

router.post('/insert',async function(req,res){
    controller.insert(req,res);
})

router.put('/update',async function(req,res){
    controller.update(req,res);
})

router.put('/updatePassword',async function(req,res){
    controller.updatePassword(req,res);
})

router.put('/inactive',async function(req,res){
    controller.inactive(req,res);
})

router.put('/delete',async function(req,res){
    controller.delete(req,res);
})

module.exports = router