'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res) {
    response.ok("Aplikasi REST API sudah berjalan",res);
}

//menampilkan semua data mahasiswa
exports.mahasiswaAll = function(req, res){
    let sql = "SELECT * FROM mahasiswa";
    connection.query(sql,function(error,rows){
        if(error) {
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    })
}

//menampilkan data mahasiswa berdasarkan id
exports.mahasiswaById = function(req, res){
    let id = req.params.id;
    let sql = "SELECT * FROM mahasiswa WHERE id_mahasiswa=?";
    connection.query(sql,[id],function(error,rows){
        if(error) {
            console.log(error);
        } else {
            response.ok(rows,res);
        }
    })
}