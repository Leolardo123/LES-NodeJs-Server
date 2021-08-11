const express    = require('express');
const config     = require('config');

module.exports = () => {
  const app = express();

  //Variáveis de Aplicação
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(express.json());
  //

  return app;
};