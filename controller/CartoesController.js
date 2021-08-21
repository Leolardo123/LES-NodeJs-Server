module.exports = {
    get : async (req,res) => {
        res.json([{
            id: 1,
            title: 'cartoes'
        }]);
    }
}