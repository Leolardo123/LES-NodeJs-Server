const app = require('./config/express')();
const port = app.get('port');

//AQUI SÃO SEPARADO AS ROTAS PRINCIPAIS

//A ROTA AUTH CUIDA DA AUTHENTICAÇÃO DO CLIENTE
app.use('/auth',require('./routes/authClienteRoutes'));

app.use('/livros',require('./routes/livrosRoutes'));

app.use('/clientes', require('./routes/clientesRoutes'));

app.use('/cupons',require('./routes/cuponsRoutes'));

app.use('/cartoes',require('./routes/cartoesRoutes'));

app.use('/pedidos',require('./routes/pedidosRoutes'));

app.use('/enderecos',require('./routes/enderecosRoutes'));

app.listen(port,()=>{
    console.log("escutando requisições na porta ("+port+")..")
});