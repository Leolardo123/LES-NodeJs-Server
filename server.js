const app = require('./config/express')();
const port = app.get('port');

//AQUI SÃO SEPARADO AS ROTAS PRINCIPAIS

//A ROTA AUTH CUIDA DA AUTHENTICAÇÃO DO CLIENTE
app.use('/auth',require('./routes/authClienteRoutes'));
app.use('/clientes', require('./routes/clientesRoutes'));
app.use('/cartoes',require('./routes/cartoesRoutes'));
app.use('/enderecos',require('./routes/enderecosRoutes'));

//ROTAS A SEREM IMPLEMENTADAS FUTURAMENTE
app.use('/livros',require('./routes/livrosRoutes'));
// app.use('/pedidos',require('./routes/pedidosRoutes'));
// app.use('/cupons',require('./routes/cuponsRoutes'));

//CONEXAO COM API DOS CORREIOS
app.use('/frete',require('./routes/freteRoutes'))

app.listen(port,()=>{
    console.log("escutando requisições na porta ("+port+")..")
});