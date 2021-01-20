const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'db',
  database: 'library',
  password: 'postgres',
  port: 5432,
});


module.exports = client;