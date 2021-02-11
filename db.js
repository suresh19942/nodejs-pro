const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'Password@1',
  database: 'user'
});

module.exports = connection;
