const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_User,
  password: process.env.DB_PW,
  database: process.env.DB_Name
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});

module.exports = connection;