const app = require('./config/express')();
const port = app.get('port');

app.use('/',require('./routes/clientesRoutes'))

app.listen(port, () => {
  console.log(`Servidor ligado na porta ${port}`)
});