const express    = require('express');
const config     = require('config');
const cors       = require('cors');
const authMiddleware = require('./auth');
module.exports = () => {
  const app = express();

  //Variáveis de Aplicação
  app.set('port', process.env.PORT || config.get('server.port'));

  // MiddleWares
  app.use(cors())
  app.use(express.json());
  //app.use(authMiddleware);
  //

  return app;
};