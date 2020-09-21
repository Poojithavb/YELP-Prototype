const mysql = require('mysql');

const myPort = 3306;
const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  port: myPort,
  user: 'root',
  password: 'yelppassword',
  database: 'yelpdb',
});

pool.getConnection((err) => {
  if (err) {
    console.log(`Some error has occured: ${err}`);
  }
});

module.exports = pool;
