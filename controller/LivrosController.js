const livrosData = require('../database/DAO/DAOLivros')

module.exports = {
    get : async (req,res) => {
        const returnData = await livrosData.get();
        if(!returnData||returnData.length==0) {
            console.log('Data not found')
            res.json({errMsg:'get: Data not found'});
        }else{
            console.log('get',returnData)
            res.json(returnData);
        }
    },
    getOne : async (req,res) => {
        const returnData = await livrosData.getOne(req.params.id);
        if(!returnData||returnData.length==0) {
            console.log('getOne: Data not found')
            res.json({errMsg:'Data not found'});
        }else{
            console.log('getOne',returnData)
            res.json(returnData);
        }
    },
    post: async (req,res) => {
        let livro = {
            "liv_valor"     : req.params.data.liv_valor,
            "liv_nome"      : req.params.data.liv_nome,
            "liv_descricao" : req.params.data.liv_descricao,
            "liv_estoque"   : req.params.data.liv_estoque,
            "liv_ativo"     : true
        }

        console.log(livro)

        const returnData = await livrosData.post(livro);

        if(!returnData||returnData.length==0) {
            console.log('post: Error on Insert')
            res.json({errMsg:'Data not found'});
        }else{
            console.log('post',returnData)
            res.json(returnData);
        }
    },
    remove: async (req,res) => {
        
    }
}