const app = require('./config/express')();
const port = app.get('port');

app.use('/',()=>{
    res.send("API está em funcionamento...")
});

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