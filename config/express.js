const express    = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
module.exports = () => {
  const app = express();
  app.set('port', process.env.PORT);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  require('../api/routes/books')(app);
  require('../api/routes/users')(app);
  require('../api/routes/auth')(app);

  return app;
};