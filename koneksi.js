var mysql = require('mysql2');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abcd123$",
  database: "test"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;