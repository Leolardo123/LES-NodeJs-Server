const bcrypt = require('bcrypt')

module.exports = {
    get : async (req,res) => {
        res.send('recurso não implementado')
    },
    post: async (req,res) => {
        res.send('recurso não implementado')

        const passeHasheado = await bcrypt.hash(req.body.senhas, 10)
        const cliente =  new Cliente(passeHasheado)
    }
}