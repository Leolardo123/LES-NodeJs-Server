const express = require('express');
const router = express.Router();

const Controller = require('../controller/Controller');
let controller = new Controller();

router.post('/',async function(req,res){
    controller.auth(req,res);
})

module.exports = router