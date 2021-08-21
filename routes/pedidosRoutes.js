const express = require('express');
const router = express.Router();
const controller = require("../controller/PedidosController");

router.get('/',async function(req,res){
    controller.get(req,res);
})
router.get('/:id',async function(req,res){
    controller.get(req,res);
})
router.post('/:id',async function(req,res){
    controller.get(req,res);
})
router.put('/:id',async function(req,res){
    controller.get(req,res);
})
router.delete('/:id',async function(req,res){
    controller.get(req,res);
})

module.exports = router