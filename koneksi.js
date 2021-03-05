var mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'test'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Koneksi berhasil');
});

module.exports = conn;