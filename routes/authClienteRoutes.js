const express = require('express');
const router = express.Router();
const controller = require('../controller/AuthClienteController');

router.post('/',async function(req,res){
    controller.postOne(req,res);
})

module.exports = router