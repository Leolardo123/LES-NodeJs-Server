const app = require('./config/express')();
const port = app.get('port');

app.use('/',(req,res)=>{
  res.send("Funcionando!")
})

app.use('/',require('./routes/clientesRoutes'))

app.use('/',require('./routes/livrosRoutes'))

app.listen(port, () => {
  console.log(`Servidor ligado na porta ${port}`)
});