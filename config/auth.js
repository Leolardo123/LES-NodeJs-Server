const jwt = require('jsonwebtoken');
const { promisify } = require('util');

async function validate(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const [, token] = authorization.split(' ');
  
  try {
    const data = await promisify(jwt.verify)(token, 'PRIVATEKEY');

    const { cli_id } = data;

    req.body.id = cli_id;

    return next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = validate;