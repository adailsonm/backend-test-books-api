module.exports = (app) => {
    const controller = require('../controllers/books')();
  
    app.get('/api/v1/books',controller.listBooks);
    app.post('/api/v1/books',controller.saveBooks);

  }