'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res) {
    response.ok("Aplikasi REST API sudah berjalan",res);
}

//menampilkan semua data mahasiswa
exports.tampil = function(req, res){
    var data = [];
    let sql = "SELECT * FROM mahasiswa";
    connection.query(sql,data,function(error,rows){
        if(error) {
            connection.log(error);
        } else {
            response.ok(rows,res);
        }
    })
}
