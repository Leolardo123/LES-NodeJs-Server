const bcrypt = require('bcrypt')

module.exports = {
    get : async (req,res) => {
        return res.json({
            first_name: 'Leonardo',
            email: 'teste@gmail.com',
            senha: 'teste'
        });
    },
    post: async (req,res) => {
        const passeHasheado = await bcrypt.hash("aaaaa", 10);
        const headers = req.headers;
        let cliente = headers

        console.log(req)

        res.send(req.body.toString());
    }
}