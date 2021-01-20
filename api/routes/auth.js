module.exports = (app) => {
    const controller = require('../controllers/auth')();
  
    app.post('/api/v1/auth',controller.authenticate);
  }