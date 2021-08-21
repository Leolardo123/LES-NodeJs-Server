const app = require('./config/express')();
const port = app.get('port');

app.use('/livros',require('./routes/livrosRoutes'));

app.use('/clientes',require('./routes/clientesRoutes'));

app.use('/cupons',require('./routes/cuponsRoutes'));

app.use('/cartoes',require('./routes/cartoesRoutes'));

app.use('/pedidos',require('./routes/pedidosRoutes'));

app.use('/enderecos',require('./routes/enderecosRoutes'));

app.listen(8080);