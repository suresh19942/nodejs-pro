const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'user'
});

module.exports = connection;
