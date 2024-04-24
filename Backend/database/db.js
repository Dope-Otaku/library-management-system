const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: process.env.MYSQL_USERNAME, //change your username
  password: process.env.MYSQL_USERNAME, //change your username
  database: "library_management_system",
});

module.exports = pool;
