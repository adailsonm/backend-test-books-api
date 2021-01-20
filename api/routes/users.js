module.exports = (app) => {
    const controller = require('../controllers/users')();
    app.get('/api/v1/users', controller.listUsers);
  }